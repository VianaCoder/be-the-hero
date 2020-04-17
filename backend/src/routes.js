const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//login
routes.post('/session', SessionController.create);


//rotas ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


//rotas perfil
routes.get('/profile', ProfileController.index);

//rotas casos
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//export
module.exports = routes;
