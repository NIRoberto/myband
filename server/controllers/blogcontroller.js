import blog from '../models/blog';
import mongoose from 'mongoose';
export default class blopost {
  // get all blog post 
  static async findAll(req, res) {
    try {
      const blogpost = await blog.find();
      res.status(200).json({
        message: "success all",
        data: blogpost
      });
    }
    catch (error) {
      res.status(404).json({
        error: error.message
      });
    }
  }


}