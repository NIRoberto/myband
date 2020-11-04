import express from 'express';
import blogcontroller from '../controllers/blogcontroller.js';
import multer from 'multer';
const upload = multer({ dest: '../routes/img/' })
let image = upload.single('blogimgs');
const router = express.Router();

// view all blopos
router.get('/blogs', blogcontroller.findAll)

// create one
router.post('/blog', image, blogcontroller.postOne);

// update one blog post
router.patch('/update/:blogid', image, blogcontroller.patchOne);
// delete one

router.delete('/delete/:blogid', blogcontroller.deleteOne);
export default router;