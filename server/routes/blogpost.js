import express from 'express';
import blogcontroller from '../controllers/blogcontroller.js';
import multer from 'multer';


const upload = multer({ dest: '../routes/img/' })
let image = upload.single('blogimgs');
const router = express.Router();

// view all blopos
router.get('/blogs', blogcontroller.findAll)



export default router;