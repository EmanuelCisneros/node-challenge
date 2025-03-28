import mongoose from "mongoose"

export const connectToDatabase = async () => {
  const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/empresas-db"

  try {
    await mongoose.connect(mongoUri)
    console.log("Conectado a MongoDB")
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error)
    process.exit(1)
  }
}
