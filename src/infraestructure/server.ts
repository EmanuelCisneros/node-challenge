import express from "express"
import "reflect-metadata"
import { createApp } from "./app"

const app = createApp()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})