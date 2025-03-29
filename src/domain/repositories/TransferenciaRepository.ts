import { Transferencia } from "../models/Transferencia"

export interface TransferenciaRepository {
  findUltimoMes(): Promise<Transferencia[]>
  findByFechaDesde(fecha: Date): Promise<Transferencia[]>
  save(transferencia: Transferencia): Promise<Transferencia>
}
