import express from 'express';
import commentcontroller from '../controllers/commentcontroller.js';
import auth from '../middleware/auth.js';


const router = express.Router();
// view all comment
router.get('/comments',commentcontroller.findAll);

   // create one question
router.post('/comment/create', auth,commentcontroller.postOne);

   // get one question
router.get('/comment/:id', auth,commentcontroller.getOne);
router.patch('/comment/update/:id', auth,commentcontroller.patchOne);
   // delete one
router.delete('/comment/delete/:id',auth,commentcontroller.deleteOne);

export default router;