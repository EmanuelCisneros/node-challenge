import { Schema, model, Document } from "mongoose"

export interface TransferenciaDocument extends Document {
  idEmpresa: string
  importe: number
  cuentaDebito: string
  cuentaCredito: string
  fecha: Date
}

const transferenciaSchema = new Schema<TransferenciaDocument>({
  idEmpresa: { type: String, required: true },
  importe: { type: Number, required: true },
  cuentaDebito: { type: String, required: true },
  cuentaCredito: { type: String, required: true },
  fecha: { type: Date, required: true }
})

export const TransferenciaModel = model<TransferenciaDocument>(
  "Transferencia",
  transferenciaSchema
)