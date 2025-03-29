import { Router } from "express"
import { getEmpresasConTransferenciasController } from "../controllers/getEmpresasConTransferencias.controller"
import { asyncHandler } from "../../shared/asyncHandler"
import { createEmpresaController } from "../controllers/createEmpresa.controller"
import { createTransferenciaController } from "../controllers/createTransferencia.controller"
import { getEmpresasAdheridasController } from "../controllers/getEmpresasAdheridas.controller"

const router = Router()

router.post("/", createEmpresaController)
router.get("/con-transferencias", asyncHandler(getEmpresasConTransferenciasController))
router.post("/transferencias", asyncHandler(createTransferenciaController))
router.get("/adheridas-ultimo-mes",asyncHandler(getEmpresasAdheridasController))

export default router
