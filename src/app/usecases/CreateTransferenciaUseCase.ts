import { z } from "zod"
import { TransferenciaRepository } from "@domain/repositories/TransferenciaRepository"
import { Transferencia } from "@domain/models/Transferencia"

const transferenciaSchema = z.object({
  idEmpresa: z.string().length(24, "El ID de empresa debe tener 24 caracteres"),
  importe: z.number().positive("El importe debe ser mayor a cero"),
  cuentaDebito: z.string().min(1, "La cuenta de débito es obligatoria"),
  cuentaCredito: z.string().min(1, "La cuenta de crédito es obligatoria"),
  fecha: z.coerce.date()
})

type TransferenciaDTO = z.infer<typeof transferenciaSchema>

export class CreateTransferenciaUseCase {
  constructor(
    private readonly transferenciaRepo: TransferenciaRepository
  ) {}

  async execute(data: TransferenciaDTO): Promise<Transferencia> {
    const parsed = transferenciaSchema.safeParse(data)

    if (!parsed.success) {
      const errores = parsed.error.errors.map(err => err.message).join(", ")
      throw new Error(errores)
    }

    return await this.transferenciaRepo.save(parsed.data)
  }
}