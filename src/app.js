import express from 'express';
import routes from './router/index.js';
import dbConnect from './config/dbConnect.js';

const app = express();
app.use(express.json());
routes(app);

const dbConnection = await dbConnect();

dbConnection.on("error", (error) => {
    console.error("error" + error);
});

dbConnection.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso!");
})

export default app;