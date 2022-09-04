import express from "express";
import morgan from "morgan";


import infoServicesRoutes from "./routes/InfoServices.routes.js";

const app = express();

const port = process.env.PORT || 5000;

app.set('port',port);

/*Milddwares*/
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/infoServices",infoServicesRoutes);

export default app;
