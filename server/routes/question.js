import express from 'express';
import questioncontroller from '../controllers/questioncontroller.js';

const router = express.Router();
// view all question
router.get('/questions', questioncontroller.findAll);

  // create one question

router.post('/question', questioncontroller.postOne);



// delete one
router.delete('/question/delete/:id', questioncontroller.deleteOne);
export default router;