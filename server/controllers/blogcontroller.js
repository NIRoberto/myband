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
      res.status(400).json({
        error: error.message
      });
    }
    console.log(blogpost);
  }

  //get one blog post 
  static async getOne(req, res) {
    const id = req.params.blogid;



    try {
    const post = await blog.findById(id);
    if (!post) {
      res.status(400).json({
        message: "not found"
      })
    }
      return res.status(200).json({
        message: "success",
        data: post
      });

    }
    catch (error) {
      res.status(404).json({
        message: "blog not found"
      })
    }
  }
  // update one

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

  // delete one blog post
  static async deleteOne(req, res) {
    const id = req.params.blogid;
    const post = await blog.findById(id);
    if (!post) {
      res.status(400).json({
        message: "not found"
      })
    }

    try {
      const deleteone = await blog.remove({ _id: id });
      res.status(200).json({
        message: "delete  a blog post was succesfull deleted!",
      });
    }
    catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
  }

}