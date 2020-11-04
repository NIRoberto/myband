import express from 'express';
import questioncontroller from '../controllers/questioncontroller.js';

const router = express.Router();
// view all question
router.get('/questions', questioncontroller.findAll);


export default router;