import { string, z } from "zod"

export const EmpresaSchema = z.object({
  cuit: z.string().min(11).max(11),
  razonSocial: z.string().min(2),
  fechaAdhesion: z.coerce.date()
})

export type Empresa = z.infer<typeof EmpresaSchema>
