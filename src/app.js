const express = require('express');
const morgan = require ('morgan');

const infoServicesRoutes = require ('./routes/InfoServices.routes.js');

const app = express();

// const port = process.env.PORT || 5000;

app.set('port',3000);

/*Milddwares*/
app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Servicios psicologicos API')
});

app.use("/api/infoServices",infoServicesRoutes);

module.exports = app;
