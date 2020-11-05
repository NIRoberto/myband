import express from 'express';
import usercontroller from '../controllers/usercontroller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//  find all users
router.get('/users',auth,usercontroller.find);
// find one user
router.get('/user/:uid', auth,usercontroller.getOne);
// create user
router.post('/signup', usercontroller.postOne);
//  login  
router.post('/login', usercontroller.post);

router.patch("/user/update/:uid",auth,usercontroller.patchOne)

router.delete('/user/delete/:uid', auth,usercontroller.delete);


export default router;