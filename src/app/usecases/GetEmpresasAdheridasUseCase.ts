import { EmpresaRepository } from "@domain/repositories/EmpresaRepository"
import { startOfDay, subMonths } from "date-fns"
import { Empresa } from "@domain/models/Empresa"

export class GetEmpresasAdheridasUseCase {
  constructor(
    private readonly empresaRepo: EmpresaRepository
  ) {}

  async execute(fechaBase = new Date()): Promise<Empresa[]> {
    const hoy = startOfDay(fechaBase)
    const unMesAtras = subMonths(hoy, 1)

    return await this.empresaRepo.findAdheridasDesde(unMesAtras)
  }
}
