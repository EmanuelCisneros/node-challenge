import { CreateEmpresaUseCase } from "../../app/usecases/CreateEmpresaUseCase"
import { makeEmpresaRepoMock } from "../../tests/mocks/empresaRepoMock"


describe("CreateEmpresaUseCase", () => {
    it("debería crear una empresa válida", async () => {
      const useCase = new CreateEmpresaUseCase(makeEmpresaRepoMock())
  
      const input = {
        cuit: "20123456789",
        razonSocial: "Empresa Test",
        fechaAdhesion: new Date("2024-03-01")
      }
  
      const result = await useCase.execute(input)
  
      expect(result).toHaveProperty("cuit", input.cuit)
      expect(result).toHaveProperty("razonSocial", input.razonSocial)
      expect(result).toHaveProperty("fechaAdhesion", input.fechaAdhesion)
      expect(result).toHaveProperty("_id", "mock-id")
    })
  
    it("debería lanzar error si el cuit es inválido", async () => {
      const useCase = new CreateEmpresaUseCase(makeEmpresaRepoMock())
  
      const input = {
        cuit: "123",
        razonSocial: "Empresa Inválida",
        fechaAdhesion: new Date()
      }
  
      await expect(useCase.execute(input)).rejects.toThrow("El CUIT debe tener 11 dígitos")
    })
  
    it("debería lanzar error si ya existe una empresa con el mismo CUIT", async () => {
      const useCase = new CreateEmpresaUseCase(
        makeEmpresaRepoMock({ existingEmpresa: true })
      )
  
      const input = {
        cuit: "20123456789",
        razonSocial: "Empresa Duplicada",
        fechaAdhesion: new Date()
      }
  
      await expect(useCase.execute(input)).rejects.toThrow("La empresa ya está registrada.")
    })
  })