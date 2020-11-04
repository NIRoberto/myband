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
  //   create one blog post

  static async postOne(req, res) {
    const blogpost = new blog({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      subbody: req.body.subbody,
      body: req.body.body,
      blogimgs: req.file.path

    })
    try {
      const newblog = await blogpost.save();
      res.status(201).json({
        message: "success created",
        data: blogpost
      });

    }
    catch (error) {
      res.status(404).json({
        error: error.message
      });
    }
    console.log(blogpost);
  }
  static async patchOne(req, res) {
    const id = req.params.blogid;
    try {
      const getone = await blog.updateOne(
        { _id: id },
        { $set: { title: req.body.title, subbody: req.body.subbody, body: req.body.body, blogimgs: req.file.path } }
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

}