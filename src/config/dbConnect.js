import mongoose from "mongoose";

mongoose.connect("mongodb+srv://joao:91306246Mdb*@cluster0.ng4ng.mongodb.net/alura-node-express-curso");

const db = mongoose.connection;

export default db;
