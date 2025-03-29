import { GetEmpresasConTransferenciasUseCase } from "../../app/usecases/GetEmpresasConTransferenciasUseCase"
import { makeTransferenciaRepoMock } from "../mocks/transferenciaRepoMock"
import { makeEmpresaRepoMock } from "../mocks/empresaRepoMock"

describe("GetEmpresasConTransferenciasUseCase", () => {
  it("debería retornar las empresas que hicieron transferencias en el último mes", async () => {
    const empresaId = "empresa-123"

    const transferencias = [
      {
        idEmpresa: empresaId,
        cuentaCredito: "12345678",
        cuentaDebito: "87654321",
        fecha: new Date(),
        importe: 10000,
      },
    ]

    const empresas = [
      {
        _id: empresaId,
        cuit: "20345678901",
        razonSocial: "Empresa 123",
        fechaAdhesion: new Date("2024-01-01"),
      },
    ]

    const transferenciaRepo = makeTransferenciaRepoMock(transferencias)
    const empresaRepo = makeEmpresaRepoMock({ empresas })

    const useCase = new GetEmpresasConTransferenciasUseCase(transferenciaRepo, empresaRepo)

    const result = await useCase.execute()

    expect(result).toHaveLength(1)
    expect(result[0]).toHaveProperty("razonSocial", "Empresa 123")
    expect(result[0]).toHaveProperty("_id", empresaId)
  })
})
