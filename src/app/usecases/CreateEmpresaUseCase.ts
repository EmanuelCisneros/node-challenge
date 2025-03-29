import { z } from "zod"
import { EmpresaRepository } from "@domain/repositories/EmpresaRepository"
import { Empresa } from "@domain/models/Empresa"

const schema = z.object({
  cuit: z.string().length(11, "El CUIT debe tener 11 dígitos"),
  razonSocial: z.string().min(1, "La razón social es obligatoria"),
  fechaAdhesion: z.coerce.date()
})

type EmpresaDTO = z.infer<typeof schema>

export class CreateEmpresaUseCase {
  constructor(private readonly empresaRepo: EmpresaRepository) {}

  async execute(data: EmpresaDTO): Promise<Empresa> {
    const parsed = schema.safeParse(data)
    if (!parsed.success) {
      throw new Error(parsed.error.errors.map(e => e.message).join(", "))
    }

    const exists = await this.empresaRepo.findByCuit(data.cuit)
    if (exists) throw new Error("La empresa ya está registrada.")

    return await this.empresaRepo.save(data)
  }
}
