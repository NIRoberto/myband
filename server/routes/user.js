import express from 'express';
import usercontroller from '../controllers/usercontroller.js';

const router = express.Router();

//  find all users
router.get('/users', usercontroller.find);
// find one user
router.get('/user/:uid', usercontroller.getOne);
// create user
router.post('/signup', usercontroller.postOne);
//  login  
router.post('/login', usercontroller.post);

router.patch("/user/update/:uid", usercontroller.patchOne)

router.delete('/user/delete/:uid', usercontroller.delete);


export default router;