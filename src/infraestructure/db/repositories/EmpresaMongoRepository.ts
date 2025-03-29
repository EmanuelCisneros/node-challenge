import { EmpresaRepository } from "../../../domain/repositories/EmpresaRepository"
import { EmpresaModel } from "../models/EmpresaModel"
import { Empresa } from "../../../domain/models/Empresa"

export class EmpresaMongoRepository implements EmpresaRepository {
  async findByCuit(cuit: string): Promise<Empresa | null> {
    return await EmpresaModel.findOne({ cuit }).lean()
  }

  async save(data: Empresa): Promise<Empresa> {
    const empresa = new EmpresaModel(data)
    await empresa.save()
    return empresa.toObject()
  }

  async findAdheridasDesde(fecha: Date): Promise<Empresa[]> {
    const result = await EmpresaModel.find({ fechaAdhesion: { $gte: fecha } }).lean()
    return result as Empresa[]
  }

  async findByIds(ids: string[]): Promise<Empresa[]> {
    const result = await EmpresaModel.find({ _id: { $in: ids } }).lean()
    return result as Empresa[]
  }
}
