import express from 'express';
import blogcontroller from '../controllers/blogcontroller.js';
import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/img');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jif') {
        cb(null, true);   
       }
    else {
        cb(null, false);
    }
}
const upload = multer({
    storage: storage, limits: {
    fileSize:1024*1024*5
    },
    fileFilter:fileFilter
});
let image = upload.single('blogimgs');

const router = express.Router();
// view all blopos
router.get('/blogs', blogcontroller.findAll)

// create one
router.post('/blog', image,blogcontroller.postOne);
// get one blog post
router.get('/blog/:blogid', blogcontroller.getOne)
// update one
router.patch('/update/:blogid',image, blogcontroller.patchOne)
// delete one

router.delete('/delete/:blogid', blogcontroller.deleteOne);
export default router;