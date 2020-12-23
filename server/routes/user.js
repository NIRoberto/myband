import express from 'express';
import usercontroller from '../controllers/usercontroller.js';
import auth from '../middleware/auth.js';
/**
 * @swagger
*  /signup:
*    post:
*      tags:
*        - user
*      summary: Create user
*       description: Define endpoint for creating new user
*      consumes:
*         - application/x-www-form-urlencoded
*      parameters:
*         - name: email
*           in: formData
*           description: email
*           required: true
*           type: string
*         - name: password
*           in: formData
*           description: password
*           required: true
*           type: string
*      produces:
*         - application/json
*      responses:
*        '201':
*          description: user created successfully and logged in.
*        '400':
*          description: bad request
*        '409':
*          description: bad request
**/
/** 
*  @swagger  
*  /login:
*    post:
*      tags:
*        - user
*      summary: ' Endpoint for  login users '
*      description: ' login user in  order to get token '
*      operationId: login  user
*      consumes:
*        - application/x-www-form-urlencoded
*      produces:
*        - application/json
*      parameters:
*        - name: email
*          in: formData
*          description: email
*          required: true
*          type: string
*        - name: password
*          in: formData
*          description: password
*          required: true
*          type: string
*      responses:
*        '200':
*          description: user logging successfully
*        '400':
*          description: all field are required
**/
/** 
*  @swagger          
*  /users/:
*    get:
*      security:
*        - Auth: []
*      tags:
*        - user
*      summary: 'Get all users '
*      description: ' endpoint for getting all user '
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
*  '/user/{id}':
*    get:
*      security:
*        - Auth: []
*      tags:
*        - user
*      summary: Endpoint for get single user
*      description: Get single user
*      produces:
*        - application/json
*      parameters:
*        - name: id
*          in: path
*          description: ID of user
*          required: true
*          type: string
*      responses:
*        '200':
*          description: User schema
*          schema:
*            $ref: '#/definitions/User'
*        '401':
*          description: Unauthorized
*        '404':
*          description: User not found
**/
/** 
*  @swagger            
*  '/user/update/{id}':
*    patch:
*      security:
*        - Auth: []
*      tags:
*        - user
*      summary: Updated user
*      description: This can only be done by the logged in user.
*      operationId: updateUser
*      consumes:
*        - application/x-www-form-urlencoded
*      produces:
*        - application/json
*      parameters:
*        - name: id
*          in: path
*          description: user id
*          required: true
*          type: string
*        - name: email
*          in: formData
*          description: email
*          required: true
*          type: string
*        - name: password
*          in: formData
*          description: password
*          required: true
*          type: string
*      responses:
*        '400':
*          description: Make sure your input valid data
*        '401':
*          description: Unauthorized
*        '404':
*          description: User not found

**/
/** 
*  @swagger         
*  '/user/delete/{id}':
*    delete:
*      security:
*        - Auth: []
*      tags:
*        - user
*      summary: endpoint for delete users
*      description: This can only be done by the admin  user.
*      produces:
*        - application/json
*      parameters:
*        - name: id
*          in: path
*          description: User id number
*          required: true
*          type: string
*      responses:
*        '400':
*          description: Invalid username supplied
*        '403':
*          description: Cann't delete user its for admin user only
*        '404':
*          description: User not found
* 
* 
**/




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