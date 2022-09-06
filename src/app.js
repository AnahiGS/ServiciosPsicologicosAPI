const express = require('express');
const morgan = require ('morgan');
const infoServicesRoutes = require ('./routes/InfoServices.routes.js');
const path = require("path");

/*swagger */
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerSpec= {
    definition: {
        openapi : "3.0.0",
        info : {
            title: "Servicios Psicológicos México API",
            version : "1.0.0"
        },
        servers : [
            {
                url : "http://localhost:5000"
            }
        ]
    },
    apis : [`${path.join(__dirname, "./routes/*.js")}`]
}

//settings
const app = express();
const port = process.env.PORT || 5000;
app.set('port',port);

/*Milddwares*/
app.use(morgan("dev"));
app.use(express.json());
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsdoc(swaggerSpec)))

//route
app.get('/', (req, res)=>{
    res.send('Servicios psicologicos API')
});

app.use("/api/infoServices",infoServicesRoutes);

module.exports = app;
