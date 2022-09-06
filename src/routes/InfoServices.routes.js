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


/**
 * @swagger
 * components:
 *  schemas:
 *      Institution:
 *          type: object
 *          properties:
 *              idInstitucion: 
 *                  type: integer
 *                  description: Posición en la lista.
 *              name: 
 *                  type: string
 *                  description: Nombre de la institución o servicio.
 *              modalidad: 
 *                  type: string
 *                  description: Modalidad a distancia presencial o en línea.
 *              estado: 
 *                  type: string
 *                  description: Estado en el que se ubica.
 *              direccion: 
 *                  type: string
 *                  description: En caso de ser un servicio presencial.
 *              telefono: 
 *                  type: string
 *                  description: Número al que puede llamar el usuario.
 *              horario: 
 *                  type: string
 *                  description: Días y horario de atención.
 *              webredesSociales: 
 *                  type: string
 *                  description: URL de página web o redes sociales.
 *              servicio:
 *                  type: string
 *                  description: Descripción del servicio que se brinda.
 *          required: 
 *              -idInstitucion
 *              -name
 *              -modalidad
 *              -estado
 *              -direccion
 *              -telefono
 *              -horario
 *              -webredesSociales
 *              -servicio
 *          example:
 *              idInstitucion: 11
 *              name: LUNAS
 *              modalidad:  A distancia
 *              estado:  Ciudad de México
 *              direccion: varios
 *              telefono: 5555122836 ext 502
 *              horario: Lunes a Viernes de 9:00 a 17:00
 *              webredesSociales: https://www.semujeres.cdmx.gob.mx/lunas
 *              servicio: Ofrece apoyo a víctimas de violencia proporcionan apoyo y acompañamiento psicológico a mujeres.
 */





/* A router that is used to create the routes for the API. */
servicesRouter.get("/allInstitutions",getInfoServices); // GET http://localhost:5000/api/infoServices/allInstutitions
//get all institutions
/**
 * @swagger
 * /api/InfoServices/allInstitutions:
 *  get:
 *      summary: return all institutions
 *      tags: [Institution]
 *      responses:
 *          200:
 *              description: all institutions
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Institution' 
 */
servicesRouter.get("/:idInstitucion", getById); // GET http://localhost:5000/api/infoServices/:idInstitucion
//get a institution
/**
 * @swagger
 * /api/InfoServices/{idInstitucion}:
 *  get:
 *      summary: return a institution
 *      tags: [Institution]
 *      parameters:
 *          - in: path
 *            name: idInstitucion
 *            schema:
 *              type: string
 *            required: true
 *            description: the institution id             
 *      responses:
 *          200:
 *              description: returned a institution!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Institution' 
 *          404:
 *              description: user not found
 */

servicesRouter.post("/addInstitution", addInfoService); // POST http://localhost:localhost:5000/api/infoServices/addInstitution

/**
 * @swagger
 * /api/InfoServices/addInstitution:
 *  post:
 *      summary: create a new institution
 *      tags: [Institution]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Institution'     
 *      responses:
 *          200:
 *              description: new institution created!
 */

servicesRouter.put("/:idInstitucion", updateInfoService); // PUT http://localhost:5000/api/infoServices/:idInstitucion
//update a institution
/**
 * @swagger
 * /api/InfoServices/{idInstitucion}:
 *  put:
 *      summary: update a institution
 *      tags: [Institution]
 *      parameters:
 *          - in: path
 *            name: idInstitucion
 *            schema:
 *              type: string
 *            required: true
 *            description: the institution id     
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Institution'          
 *      responses:
 *          200:
 *              description: user updated! 
 *          404:
 *              description: user not found
 */

servicesRouter.delete("/:idInstitucion", deleteInfoService);// DELETE http://localhost:5000/api/infoServices/:idInstitucion
//delete a institution
/**
 * @swagger
 * /api/InfoServices/{idInstitucion}:
 *  delete:
 *      summary: delete a institution
 *      tags: [Institution]
 *      parameters:
 *          - in: path
 *            name: idInstitucion
 *            schema:
 *              type: string
 *            required: true
 *            description: the institution id             
 *      responses:
 *          200:
 *              description: user deleted
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Institution' 
 *          404:
 *              description: user not found
 */


module.exports = servicesRouter;