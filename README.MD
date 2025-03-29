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

GET /empresas/con-transferencias,

GET /empresas/adheridas-ultimo-mes,

POST /empresas,

POST /empresas/transferencias

Instalar dependencias: npm install

Crear un .env para conectar a MongoDB o configs adicionales.

Correr los tests: npm run test

Levantar el proyecto : npm run dev
