import express from 'express';
import controller from '../controllers/user';
import extractJWT from '../middleware/extractJWT';

const router = express.Router();

router.get('/validate', extractJWT, controller.validateToken);
router.post('/sign_up', controller.sign_up);
router.post('/login', controller.login);
router.post('/save_weight', extractJWT, controller.saveWeight);
router.get('/get_weight_history', extractJWT, controller.getWeights);

export = router;
