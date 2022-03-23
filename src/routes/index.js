import express from "express";
import app from "../app.js";
import livros from "./livrosRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livros
    )

}

export default routes