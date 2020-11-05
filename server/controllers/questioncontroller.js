import questionmodel from '../models/question.js';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';
const schema = {
  fullname: Joi.string().min(6).max(20).required(),
  email: Joi.string().min(6).required().email(),
  subject: Joi.string().min(3).max(15).required(),
  message: Joi.string().min(6).max(100).required()

}
export default class questionscontroller {
  // // get all blog post 
  static async findAll(req, res) {
    try {
      const questions = await questionmodel.find();
      res.status(200).json({
        message: "success all",
        data: questions
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
    const quest = new questionmodel({
      _id: new mongoose.Types.ObjectId(),
      fullname: req.body.fullname,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,

    })
    try {
      const newblog = await quest.save();
      res.status(201).json({
        message: "success question created",
        data: quest
      });

    }
    catch (error) {
      res.status(400).json({
        error: error.message
      });
    }
  }
 

  // delete question
  static async deleteOne(req, res) {
    const id = req.params.id;
        const quest = await questionmodel.findById(id);
    if (!quest) {
      res.status(404).json({
        message: "not found"
      });
    }

    try {
  
      const deletequest = await questionmodel.remove({ _id: id });
      res.status(200).json({
        message: "delete  a quest was succesfull done!",
      });
   
    }
    
    catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
}


}
