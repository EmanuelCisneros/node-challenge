import { Request, Response } from "express"
import { GetEmpresasConTransferenciasUseCase } from "../../app/usecases/GetEmpresasConTransferenciasUseCase"
import { TransferenciaMongoRepository } from "../../infraestructure/db/repositories/TransferenciaMongoRepository"
import { EmpresaMongoRepository } from "../../infraestructure/db/repositories/EmpresaMongoRepository"


const transferenciaRepo = new TransferenciaMongoRepository()
const empresaRepo = new EmpresaMongoRepository()
const useCase = new GetEmpresasConTransferenciasUseCase(transferenciaRepo, empresaRepo)

export const getEmpresasConTransferenciasController = async (
  req: Request,
  res: Response
) => {
  try {
    const empresas = await useCase.execute()
    return res.status(200).json(empresas)
  } catch (error: any) {
    return res.status(400).json({ message: error.message })
  }
}