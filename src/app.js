import db from "./config/dbConnect.js"
import express from "express"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("conexao com o banco feita com sucesso")
})

const app = express();
app.use(express.json())
routes(app)

export default app;