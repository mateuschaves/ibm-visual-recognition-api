import { Router } from 'express';
import upload from './helpers/multer';
import ImageController from './controllers/ImageController';

const routes = Router();

routes.post('/image', upload.array('images', 20), ImageController.store);

export default routes;