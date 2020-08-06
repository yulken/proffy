import express from 'express';
import ClassesController from './controlles/ClassesControler';
import ConnectionsController from './controlles/ConnectionsController';


const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)


export default routes;


