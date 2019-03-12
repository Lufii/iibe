const controllerRoutes = require('../controllers/routing.js');
module.exports = (app) =>{
  //Returns all students
  app.get('/people', controllerRoutes.getPeople);

  //Creates a student
  app.post('/person/add', controllerRoutes.createPerson);

  //Deletes a student
  app.post('/person/delete', controllerRoutes.deletePerson);

  //Updates a student
  app.post('/person/edit', controllerRoutes.editPerson);
}
