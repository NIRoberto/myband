import express from 'express';
import blogcontroller from '../controllers/blogcontroller.js';
import auth from '../middleware/auth.js';
import multer from 'multer';
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