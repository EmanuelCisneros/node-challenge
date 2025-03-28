import dotenv from "dotenv"
import { connectToDatabase } from "./config"
import { app } from "./app"

dotenv.config()

const PORT = process.env.PORT || 3000

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
  })
})