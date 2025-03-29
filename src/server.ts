import dotenv from "dotenv"
dotenv.config()

import { connectToDatabase } from "./config"
import { createApp } from "./infraestructure/app"

const PORT = process.env.PORT || 3000

connectToDatabase().then(() => {
  const app = createApp()
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
  })
})
