import { Schema, model, Document } from "mongoose"

export interface EmpresaDocument extends Document {
  cuit: string
  razonSocial: string
  fechaAdhesion: Date
}

const empresaSchema = new Schema<EmpresaDocument>({
  cuit: { type: String, required: true },
  razonSocial: { type: String, required: true },
  fechaAdhesion: { type: Date, required: true }
})

export const EmpresaModel = model<EmpresaDocument>("Empresa", empresaSchema)
