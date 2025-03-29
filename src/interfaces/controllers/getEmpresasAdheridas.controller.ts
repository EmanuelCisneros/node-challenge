import { Request, Response } from "express"
import { GetEmpresasAdheridasUseCase } from "../../app/usecases/GetEmpresasAdheridasUseCase"
import { EmpresaMongoRepository } from "../../infraestructure/db/repositories/EmpresaMongoRepository"

const empresaRepo = new EmpresaMongoRepository()
const useCase = new GetEmpresasAdheridasUseCase(empresaRepo)

export const getEmpresasAdheridasController = async (req: Request, res: Response) => {
  try {
    const empresas = await useCase.execute()
    return res.status(200).json(empresas)
  } catch (error: any) {
    return res.status(400).json({ message: error.message })
  }
}
