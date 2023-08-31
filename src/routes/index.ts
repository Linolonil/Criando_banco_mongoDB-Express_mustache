import { Router} from 'express';
import * as HomeController from '../controllers/homeController'
 
 const router = Router();

 router.get('/', HomeController.home)
 router.post('/novo-usuario', HomeController.addUserAction)
 router.get('/usuario/:id/addidade', HomeController.addAge)

 export default router