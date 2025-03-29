import { TransferenciaRepository } from "../../domain/repositories/TransferenciaRepository"
import { Transferencia } from "../../domain/models/Transferencia"

export const makeTransferenciaRepoMock = (
  data: Transferencia[] = []
): TransferenciaRepository => {
  return {
    async findUltimoMes(): Promise<Transferencia[]> {
      return data
    },

    async findByFechaDesde(fecha: Date): Promise<Transferencia[]> {
      return data.filter((t) => t.fecha >= fecha)
    },

    async save(transferencia: Transferencia): Promise<Transferencia> {
      return {
        ...transferencia,
        _id: "mock-transferencia-id"
      } as Transferencia
    }
  }
}
