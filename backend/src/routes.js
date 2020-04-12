const express = require('express');
const routes = express.Router();
const ongController = require ('./controllers/ongController');
const incidentsController  = require ('./controllers/incidentController'); 
const profileController = require ('./controllers/profileController'); 
const sessionController = require ('./controllers/sessionController'); 

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create);

routes.post ('/incidents',  incidentsController.create); 
routes.get ('/incidents',  incidentsController.index); 
routes.delete('/incidents/:id', incidentsController.delete); 

routes.get('/profile', profileController.index); 

routes.post('/sessions', sessionController.create); 




module.exports = routes;



