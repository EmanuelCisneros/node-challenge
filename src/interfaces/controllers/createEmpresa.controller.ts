import { Request, Response } from "express"
import { CreateEmpresaUseCase } from "../../app/usecases/CreateEmpresaUseCase"
import { EmpresaMongoRepository } from "../../infraestructure/db/repositories/EmpresaMongoRepository"


const empresaRepo = new EmpresaMongoRepository()
const useCase = new CreateEmpresaUseCase(empresaRepo)

export const createEmpresaController = async (req: Request, res: Response) => {
  try {
    const result = await useCase.execute(req.body)
    res.status(201).json(result)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}
