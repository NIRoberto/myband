import questionmodel from '../models/question.js';
import mongoose from 'mongoose';

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


}
