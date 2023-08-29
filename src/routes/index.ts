import { Router} from 'express';
import * as HomeController from '../controllers/homeController'
import * as InfoController from '../controllers/infoControle'
 
 const router = Router();

 router.get('/', HomeController.home)
 router.post('/novo-usuario', HomeController.addUserAction)


 router.get('/contato', InfoController.contato )
 router.get('/sobre', InfoController.sobre)


 export default router