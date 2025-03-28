import { z } from "zod"
import { EmpresaModel } from "../../infrastructure/db/models/EmpresaModel"

const EmpresaSchema = z.object({
  cuit: z.string().length(11, "El CUIT debe tener 11 dígitos"),
  razonSocial: z.string().min(1, "La razón social es obligatoria"),
  fechaAdhesion: z.date(),
})

type CreateEmpresaDTO = z.infer<typeof EmpresaSchema>

export class CreateEmpresaUseCase {
  async execute(data: CreateEmpresaDTO) {
    const parsed = EmpresaSchema.safeParse(data)

    if (!parsed.success) {
      throw new Error(parsed.error.errors.map(err => err.message).join(", "))
    }

    const exists = await EmpresaModel.findOne({ cuit: data.cuit })
    if (exists) {
      throw new Error("La empresa ya está registrada.")
    }

    const empresa = new EmpresaModel(data)
    await empresa.save()

    return empresa.toObject()
  }
}