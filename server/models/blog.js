import mongoose ,{Schema} from 'mongoose';
 
const blogschema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    subbody: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    blogimgs: {
         type: String,
        required: false 
    }
});
module.exports = mongoose.model('blog', blogschema);