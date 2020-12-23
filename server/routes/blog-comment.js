import express from 'express';
import commentcontroller from '../controllers/commentcontroller.js';
import auth from '../middleware/auth.js';

/**
 * @swagger
*  /comments/:
*    get:
*      tags:
*        - comment
*      summary: Get all on single comment
*      description: define endpoint to retrieve all comment
*      operationId: comment
*      produces:
*        - application/json
*      responses:
*        '200':
*          description: success
*        '401':
*          description: Unauthorized
*        '404':
*          description: not found
**/
/** 
*  @swagger
*  '/comment/{id}':
*    get:
*      security:
*        - Auth: []
*      tags:
*        - comment
*      summary: Endpoint for getting a single comment
*      description: Get single comment
*      produces:
*        - application/json
*      parameters:
*        - name: id
*          in: path
*          description: ID of blog post
*          required: true
*          type: string
*      responses:
*        '200':
*          description: comment schema
*          schema:
*            $ref: '#/definitions/Comment'
*        '401':
*          description: Unauthorized
*        '404':
*          description: Comment not found
**/
/** 
*  @swagger
*  /comment/:
*    post:
*      security:
*        - Auth: []
*      tags:
*        - comment
*      summary: Endpoint for creating comment
*      description: Create comment
*      consumes:
*        - multipart/form-data
*      produces:
*        - application/json
*      parameters:
*        - name: fullname
*          in: formData
*          description: fullname
*          required: true
*          type: string
*        - name: Email
*          in: formData
*          description: Email
*          required: true
*          type: string
*        - name: comment
*          in: formData
*          description: comment
*          required: true
*          type: string
*      responses:
*        '201':
*          description: Success
*        '401':
*          description: Unauthorized
*        '404':
*          description: Comment not found
**/
/** 
*  @swagger
*  '/comment/update/{id}':
*    patch:
*      security:
*        - Auth: []
*      tags:
*        - comment
*      summary: Endpoint for update a comment
*      description: Update comment
*      consumes:
*        - multipart/form-data
*      produces:
*        - application/json
*      parameters:
*        - name: id
*          in: path
*          description: ID of blog post
*          required: true
*          type: string
*        - name: fullname
*          in: formData
*          description: Fullname
*          required: true
*          type: string
*        - name: email
*          in: formData
*          description: Email
*          required: true
*          type: string
*        - name: message
*          in: formData
*          description: Message
*          required: true
*          type: string
*      responses:
*        '200':
*          description: Success
*        '401':
*          description: Unauthorized
*        '404':
*          description: Comment not found
**/
/** 
*  @swagger
*  '/comment/delete/{id}':
*    delete:
*      security:
*        - Auth: []
*      tags:
*        - comment
*      summary: 'Endpoint for deletes the comment by id '
*      description: ' Delete comment by id'
*      produces:
*        - application/json
*      parameters:
*        - name: id
*          in: path
*          required: true
*          type: string
*      responses:
*        '200':
*          description: Success
*        '401':
*          description: Unauthorized
*        '403':
*          description: Cann't delete comment which is not your
*        '404':
*          description: Comment not found
* */

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