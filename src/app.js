const express = require('express');
const morgan = require ('morgan');
const infoServicesRoutes = require ('./routes/InfoServices.routes.js');

/*swagger */


//settings
const app = express();
const port = process.env.PORT || 5000;
app.set('port',port);

/*Milddwares*/
app.use(morgan("dev"));
app.use(express.json());

//route
app.get('/', (req, res)=>{
    res.send('Servicios psicologicos API')
});

app.use("/api/infoServices",infoServicesRoutes);

module.exports = app;
