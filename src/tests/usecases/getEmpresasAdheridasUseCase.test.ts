import { GetEmpresasAdheridasUseCase } from "../../../src/app/usecases/GetEmpresasAdheridasUseCase"
import { makeEmpresaRepoMock } from "../mocks/empresaRepoMock"

describe("GetEmpresasAdheridasUseCase", () => {
  it("debería devolver empresas adheridas en el último mes", async () => {
    const empresas = [
      { cuit: "20123456789", razonSocial: "Empresa 1", fechaAdhesion: new Date("2025-03-01") },
      { cuit: "20987654321", razonSocial: "Empresa 2", fechaAdhesion: new Date("2025-02-15") },
      { cuit: "20333444556", razonSocial: "Empresa 3", fechaAdhesion: new Date("2025-03-15") }
    ]

    const empresaRepoMock = makeEmpresaRepoMock({ empresas })
    const useCase = new GetEmpresasAdheridasUseCase(empresaRepoMock)

    const fechaBase = new Date("2025-03-28")
    const result = await useCase.execute(fechaBase)

    expect(result).toHaveLength(2)
    expect(result.map(e => e.razonSocial)).toContain("Empresa 1")
    expect(result.map(e => e.razonSocial)).toContain("Empresa 3")
  })
})