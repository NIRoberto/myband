import express from 'express';
import questioncontroller from '../controllers/questioncontroller.js';
import auth from '../middleware/auth.js';

/**
* @swagger
 *  /questions/:
 *   get:
 *     security:
 *       - Auth: []
 *     tags:
 *       - Questions
 *     summary: 'Get all question  '
 *     description: Define endpoint to retrieve all questions
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: All question are
 *       '404':
 *         description: Not found
 ***/
/**
* @swagger
 * '/question/{id}':
 *   get:
 *     security:
 *       - Auth: []
 *     tags:
 *       - Questions
 *     summary: Endpoint for getting  a question
 *     description: Get single question
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of blog post
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: question scheme
 *         schema:
 *           $ref: '#/definitions/questionmodel'
 *       '400':
 *         description: You input wrong id
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Question not found
 **/
/**
* @swagger
 * /question/:
 *   post:
 *     security:
 *       - Auth: []
 *     tags:
 *       - Questions
 *     summary: Endpoint for creating question
 *     description: 'Create question '
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Fullname
 *         in: formData
 *         description: Fullname
 *         required: true
 *         type: string
 *       - name: Email
 *         in: formData
 *         description: Email
 *         required: true
 *         type: string
 *       - name: message
 *         in: formData
 *         description: Message
 *         required: true
 *         type: string
 *     responses:
 *       '201':
 *         description: 'Question created successfull '
 *       '400':
 *         description: All feild are required
 *       '401':
 *         description: Unauthorized
 **/
/**
* @swagger
 * '/question/delete/{id}':
 *   delete:
 *     security:
 *       - Auth: []
 *     tags:
 *       - Questions
 *     summary: 'Endpoint for delete one questions '
 *     description: ' Delete question by id'
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: Question deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Question not found
 **/


const router = express.Router();
// view all question
router.get('/questions', auth, questioncontroller.findAll);

  // create one question

router.post('/question', auth, questioncontroller.postOne);
router.get('/question/:id',auth,questioncontroller.getOne);

// delete one
router.delete('/question/delete/:id', auth, questioncontroller.deleteOne);

export default router;