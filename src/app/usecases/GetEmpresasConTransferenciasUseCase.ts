import { EmpresaRepository } from "@domain/repositories/EmpresaRepository"
import { TransferenciaRepository } from "@domain/repositories/TransferenciaRepository"
import { startOfDay, subMonths } from "date-fns"
import { Transferencia } from "@domain/models/Transferencia"

export class GetEmpresasConTransferenciasUseCase {
  constructor(
    private readonly transferenciaRepo: TransferenciaRepository,
    private readonly empresaRepo: EmpresaRepository
  ) {}

  async execute() {
    const hoy = startOfDay(new Date())
    const unMesAtras = subMonths(hoy, 1)

    const transferencias: Transferencia[] = await this.transferenciaRepo.findByFechaDesde(unMesAtras)

    const idsEmpresas: string[] = [
      ...new Set(transferencias.map((t) => t.idEmpresa.toString()))
    ]

    const empresas = await this.empresaRepo.findByIds(idsEmpresas)

    return empresas
  }
}
