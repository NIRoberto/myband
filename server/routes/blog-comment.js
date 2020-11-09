import express from 'express';
import commentcontroller from '../controllers/commentcontroller.js';
import auth from '../middleware/auth.js';


const router = express.Router();
// view all comment
router.get('/comments',commentcontroller.findAll);

   // create one question
router.post('/comment/create', commentcontroller.postOne);


router.patch('/comment/update/:id', commentcontroller.patchOne);
   // delete one
router.delete('/comment/delete/:id',commentcontroller.deleteOne);

export default router;