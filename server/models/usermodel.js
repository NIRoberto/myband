import mongoose ,{Schema} from 'mongoose';
 const signupschema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String
    },
    password: {
        type: String,
    },
  
});

module.exports = mongoose.model('signup', signupschema);