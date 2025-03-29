import { Request, Response } from "express"
import { CreateTransferenciaUseCase } from "../../app/usecases/CreateTransferenciaUseCase"
import { TransferenciaMongoRepository } from "../../infraestructure/db/repositories/TransferenciaMongoRepository"

const transferenciaRepo = new TransferenciaMongoRepository()
const useCase = new CreateTransferenciaUseCase(transferenciaRepo)

export const createTransferenciaController = async (req: Request, res: Response) => {
  try {
    const transferencia = await useCase.execute(req.body)
    res.status(201).json(transferencia)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}

// C:\Users\emanu\Desktop\challenges\challenge-node\backend-empresas-node\src\infraestructure\db\repositories\TransferenciaMongoRepository.ts