import { TransferenciaRepository } from "../../../domain/repositories/TransferenciaRepository"
import { Transferencia } from "../../../domain/models/Transferencia"
import { TransferenciaModel } from "../models/TransferenciaModel"
import { startOfDay, subMonths } from "date-fns"

export class TransferenciaMongoRepository implements TransferenciaRepository {
  async findUltimoMes(): Promise<Transferencia[]> {
    const hoy = startOfDay(new Date())
    const unMesAtras = subMonths(hoy, 1)

    const transferencias = await TransferenciaModel.find({
      fecha: { $gte: unMesAtras }
    })

    return transferencias.map((t) => t.toObject())
  }

  async findByFechaDesde(fecha: Date): Promise<Transferencia[]> {
    const transferencias = await TransferenciaModel.find({
      fecha: { $gte: fecha }
    })

    return transferencias.map((t) => t.toObject())
  }

  async save(transferencia: Transferencia): Promise<Transferencia> {
    const doc = new TransferenciaModel(transferencia)
    await doc.save()
    return doc.toObject()
  }
}