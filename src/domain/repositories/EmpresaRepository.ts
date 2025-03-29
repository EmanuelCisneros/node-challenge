import { Empresa } from "../models/Empresa"

export interface EmpresaRepository {
  findByCuit(cuit: string): Promise<Empresa | null>
  save(data: Empresa): Promise<Empresa>
  findAdheridasDesde(fecha: Date): Promise<Empresa[]>
  findByIds(ids: string[]): Promise<Empresa[]>
}
