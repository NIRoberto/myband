import commentmodel from '../models/comment.js';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';
const schema = {
  fullname: Joi.string().min(6).max(20).required(),
  email: Joi.string().min(6).required().email(),
 comment: Joi.string().min(6).max(100).required()

}
export default class questionscontroller {
  // // get all comment
  static async findAll(req, res) {
    try {
      const comment = await commentmodel.find();
      res.status(200).json({
        message: "success all",
        data: comment
      });
    }
    catch (error) {
      res.status(404).json({
        error: error.message
      });
    }
  }
 static async postOne(req, res) {
  // validate data 
    const { error } = Joi.validate(req.body, schema);
    if (error) {
      res.status(400).json({
        message: error.details[0].message
      })
    }
    const comment = new commentmodel({
      _id: new mongoose.Types.ObjectId(),
      userId:req.loggeduser.userId,
      email: req.body.email,
      fullname: req.body.fullname,
      comment: req.body.comment,

    })
    try {
      const newcommet = await comment.save();
     return res.status(201).json({
        message: "success question created",
        data: newcommet
      });

    }
    catch (error) {
    return  res.status(400).json({
        error: error.message
      });
    }
    }
     // update one

  static async patchOne(req, res) {
      const id = req.params.id;
        // validate data 
    const { error } = Joi.validate(req.body, schema);
    if (error) {
      res.status(400).json({
        message: error.details[0].message
      })
    }
      const comment = await commentmodel.findById(id);
     if (!comment) {
    return   res.status(404).json({
        message: "not found"
      });
    }

      if (req.loggeduser.userId !== comment.userId) {
      return res.status(403).json({
        message:"You cann't update which not belongs to you"
      })
    }
    try {
      const updateone = await commentmodel.updateOne(
        { _id: id },
        { $set: { email: req.body.email, fullname: req.body.fullname, comment: req.body.comment } }
      );
      res.status(200).json({
        message: "update blog post was successfull done",

      });
    } catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
  }
 // delete comment
  static async deleteOne(req, res) {
    const id = req.params.id;
    const comment = await commentmodel.findById(id);
     if (!comment) {
    return   res.status(404).json({
        message: "not found"
      });
    }
       if (req.loggeduser.userId !== comment.userId) {
      return res.status(403).json({
        message:"You cann't delete which not belongs to you"
      })
    }
   
      try {
          const commentdelete = await commentmodel.remove({ _id: id });
      return res.status(200).json({
        message: "delete  a quest was succesfull done!",
      });
   
    }
    
    catch (error) {
    return  res.status(404).json({
        error: error.message,
      });
    }
}
}
