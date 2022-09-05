const express = require('express');
const servicesRouter = express.Router();
// import { methods as infoServicesController } from "./../controllers/infoServices.controller.js";

// const router = Router();
console.log("Hola Mundo")

const{
    getInfoServices,
    getById,
    addInfoService,
    updateInfoService,
    deleteInfoService,
}= require('./../controllers/infoServices.controller.js');


/* A router that is used to create the routes for the API. */
servicesRouter.get("/allInstitutions",getInfoServices); // GET http://localhost:8000/api-restful/infoServices/
servicesRouter.get("/:idInstitucion", getById); // GET http://localhost:8000/api-restful/infoServices/:idInstitucion
servicesRouter.post("/addInstitution", addInfoService); // POST http://localhost:8000/api-restful/infoServices/
servicesRouter.put("/:idInstitucion", updateInfoService); // PUT http://localhost:8000/api-restful/infoServices/:idInstitucion

servicesRouter.delete("/:idInstitucion", deleteInfoService);// DELETE http://localhost:8000/api-restful/infoServices/:idInstitucion


module.exports = servicesRouter;