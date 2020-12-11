import mongoose ,{Schema} from 'mongoose';
 const questionschema = new Schema({
     _id: mongoose.Schema.Types.ObjectId,
       userId: {
         type: String,
         
     },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
         type: String,
        required: false 
    }
});


module.exports = mongoose.model('questions', questionschema);