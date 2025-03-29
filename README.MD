Este proyecto implementa una API RESTful para la gestión de empresas y sus transferencias. Está construido con **Node.js**, **TypeScript**, **Express**, **MongoDB**, y sigue una arquitectura hexagonal.

## Características principales

- Crear empresas con validaciones.
- Crear transferencias entre cuentas.
- Obtener empresas adheridas en el último mes.
- Obtener empresas con transferencias recientes.
- Arquitectura hexagonal.
- Validaciones con `zod`.
- Testing con `jest`.


 ENDPOINTS: 

| Método | Endpoint                                  | Descripción                                           |
|--------|-------------------------------------------|-------------------------------------------------------|
| GET    | /empresas/con-transferencias              | Empresas que realizaron transferencias el último mes |
| GET    | /empresas/adheridas-ultimo-mes            | Empresas adheridas el último mes                     |
| POST   | /empresas                                 | Crear nueva empresa                                  |
| POST   | /empresas/transferencias                  | Crear nueva transferencia para una empresa           |

Ejemplos de requests

Crear empresa (POST /empresas)

{
"nombre": "Empresa Test S.A.",
"cuit": "30-12345678-9",
"fechaAlta": "2025-03-01"
}

Crear transferencia (POST /empresas/transferencias)
{
"importe": 2500.75,
"empresaId": "ID_EMPRESA_AQUI",
"cuentaDebito": "1234567890",
"cuentaCredito": "0987654321",
"fecha": "2025-03-10"
}

Instalar dependencias: npm install

Crear un .env para conectar a MongoDB o configs adicionales.

Correr los tests: npm run test

Levantar el proyecto : npm run dev
