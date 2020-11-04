import mongoose ,{Schema} from 'mongoose';
 const signupschema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
  
});

module.exports = mongoose.model('signup', signupschema);