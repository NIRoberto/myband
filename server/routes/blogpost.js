import express from 'express';
import blogcontroller from '../controllers/blogcontroller.js';
import auth from '../middleware/auth';
import multer from 'multer';



/**
* @swagger
* /blogs/:
*    get:
*      tags:
*        - Blog
*      summary: Get all blog posts
*      description: Define endpoint to retrieve all blog posts
*      operationId: Get all post
*      produces:
*        - application/json
*      responses:
*        '404':
*          description: not found
**/
/**
* @swagger 
*  '/blog/{blogid}':
*    get:
*      tags:
*        - Blog
*      summary: Endpoint for getting single blog post
*      description: Get single blog
*      produces:
*        - application/json
*      parameters:
*        - name: blogid
*          in: path
*          description: ID of blog post
*          required: true
*          type: string
*      responses:
*        '200':
*          description: blog schema
*          schema:
*            $ref: '#/definitions/Blog'
*        '400':
*          description: 'Invalid id '
*        '404':
*          description: Blog not found
**/
/** 
* @swagger 
*  /blog/:
*    post:
*      security:
*        - Auth: []
*      tags:
*        - Blog
*      summary: Endpoint for creating new blog post
*      description: Create blog
*      consumes:
*        - multipart/form-data
*      produces:
*        - application/json
*      parameters:
*        - name: title
*          in: formData
*          description: Title
*          required: true
*          type: string
*        - name: subbody
*          in: formData
*          description: Subbody
*          required: true
*          type: string
*        - name: body
*          in: formData
*          description: Body
*          required: true
*          type: string
*        - name: blogimgs
*          in: formData
*          description: Image
*          required: true
*          type: file
*      responses:
*        '201':
*          description: Blog created successfully
*        '400':
*          description: All field are required
**/
/** 
*  @swagger 
*  '/blog/update/{id}':
*    patch:
*      security:
*        - Auth: []
*      tags:
*        - Blog
*      summary: Endpoint for update blog post
*      description: Update blog post
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
*        - name: title
*          in: formData
*          description: Title
*          required: true
*          type: string
*        - name: subbody
*          in: formData
*          description: Subbody
*          required: true
*          type: string
*        - name: body
*          in: formData
*          description: Body
*          required: true
*          type: string
*        - name: blogimgs
*          in: formData
*          description: Image
*          required: true
*          type: file
*      responses:
*        '200':
*          description: Update successfull done
*        '400':
*          description: All field are required
*        '401':
*          description: Unauthorized
**/
/** 
* @swagger 
*  '/blog/delete/{id}':
*    delete:
*      security:
*        - Auth: []
*      tags:
*        - Blog
*      summary: Endpoint for deletes a blog by id
*      description: ' Delete blog by id'
*      produces:
*        - application/json
*      parameters:
*        - name: id
*          in: path
*          required: true
*          type: string
*      responses:
*        '200':
*          description: Delete a blog was successfully done.
*        '401':
*          description: Unauthorized
*        '403':
*          description: Cann't delete blog which is not your
*        '404':
*          description: Blog not found
* * 
 */
const upload = multer({ dest: '.img' })
let image = upload.single('blogimgs');
const router = express.Router();

// view all blopos
router.get('/blogs', blogcontroller.findAll)

// create one
router.post('/blog', auth,image, blogcontroller.postOne);
// get one blog post
router.get('/blog/:blogid', blogcontroller.getOne)

// update one blog post
router.patch('/blog/update/:blogid',auth , image, blogcontroller.patchOne);
// delete one

router.delete('/blog/delete/:blogid', auth, blogcontroller.deleteOne);

export default router;