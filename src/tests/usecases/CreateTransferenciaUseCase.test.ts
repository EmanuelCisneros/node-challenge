import { CreateTransferenciaUseCase } from "../../../src/app/usecases/CreateTransferenciaUseCase"
import { makeTransferenciaRepoMock } from "../mocks/transferenciaRepoMock"

describe("CreateTransferenciaUseCase", () => {
  it("debería crear una transferencia válida", async () => {
    const transferenciaRepoMock = makeTransferenciaRepoMock()
    const useCase = new CreateTransferenciaUseCase(transferenciaRepoMock)

    const input = {
      idEmpresa: "6123456789abcdef01234567",
      importe: 1000,
      cuentaDebito: "00112233",
      cuentaCredito: "99887766",
      fecha: new Date("2025-03-20")
    }

    const result = await useCase.execute(input)

    expect(result).toEqual(expect.objectContaining({
      idEmpresa: input.idEmpresa,
      importe: input.importe,
      cuentaDebito: input.cuentaDebito,
      cuentaCredito: input.cuentaCredito,
      fecha: input.fecha
    }))
  })

  it("debería fallar si falta un campo obligatorio", async () => {
    const transferenciaRepoMock = makeTransferenciaRepoMock()
    const useCase = new CreateTransferenciaUseCase(transferenciaRepoMock)

    const input = {
      // Falta cuentaCredito
      idEmpresa: "1",
      importe: 1000,
      cuentaDebito: "00112233",
      fecha: new Date()
    }

    await expect(useCase.execute(input as any)).rejects.toThrow()
  })
})
