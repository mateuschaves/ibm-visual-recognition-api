import { Router } from 'express';
import multer from 'multer';
import ImageController from './controllers/ImageController';

const upload = multer({ dest: 'images/' });
const routes = Router();

routes.post('/image', upload.array('images', 20), ImageController.store);

export default routes;