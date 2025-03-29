import { EmpresaRepository } from "../../domain/repositories/EmpresaRepository"
import { Empresa } from "../../domain/models/Empresa"

type MakeEmpresaRepoOptions = {
  empresas?: Empresa[]
  existingEmpresa?: boolean
}


export const makeEmpresaRepoMock = (options: MakeEmpresaRepoOptions = {}): EmpresaRepository => {
    const empresas = options.empresas ?? []
  
    return {
      async findByCuit(cuit: string): Promise<Empresa | null> {
        return options.existingEmpresa
          ? {
              cuit,
              razonSocial: "Mock",
              fechaAdhesion: new Date(),
              _id: "mock-id"
            } as Empresa
          : null
      },
  
      async save(empresa: Empresa): Promise<Empresa> {
        return { ...empresa, _id: "mock-id" } as Empresa
      },
  
      async findAdheridasDesde(fecha: Date): Promise<Empresa[]> {
        return empresas.filter((e) => e.fechaAdhesion >= fecha)
      },
  
      async findByIds(ids: string[]): Promise<Empresa[]> {
        return empresas.filter((e: any) => ids.includes(e._id?.toString()))
      }
    }
  }
