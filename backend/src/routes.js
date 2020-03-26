const { Router } = require('express');

const OngsController = require('./controller/OngsController');
const IncidentsController = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const route = new Router();

route.post('/session', SessionController.store);

route.post('/ongs', OngsController.store);
route.get('/ongs', OngsController.index);

route.post('/incidents', IncidentsController.store);
route.get('/incidents', IncidentsController.index);
route.delete('/incidents/:id', IncidentsController.delete);

route.get('/profile', ProfileController.index);

module.exports = route;
