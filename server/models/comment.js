import mongoose ,{Schema} from 'mongoose';
 const commentschema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
         email: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
  
    comment: {
         type: String,
        required: false
    }
});
module.exports = mongoose.model('comment', commentschema);