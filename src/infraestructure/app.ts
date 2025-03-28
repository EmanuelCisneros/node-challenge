import express from "express"
import { json } from "body-parser"
import empresaRoutes from "../interfaces/routes/empresa.routes"

export const createApp = () => {
  const app = express()
  app.use(json())

  app.use("/empresas", empresaRoutes)

  return app
}