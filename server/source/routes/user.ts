import express from 'express';
import controller from '../controllers/user';

const router = express.Router();

router.get('/get/users', controller.getAllUsers);
router.post('/create/users', controller.createUser);

export = router;
