import blog from '../models/blog';
import mongoose from 'mongoose';
import { compare } from 'bcryptjs';
export default class blopost {
  // get all blog post 
  static async findAll(req, res) {
    try {
      const blogpost = await blog.find();
      res.status(200).json({
        message: "success ",
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
      userId:req.loggeduser.userId,
      title: req.body.title,
      subbody: req.body.subbody,
      body: req.body.body,
      blogimgs: req.file.path
    })
    try {
      const newblog = await blogpost.save();
      res.status(201).json({
        message: "Blog post successfully created.",
        data: newblog
      });
}
    catch (error) {
      res.status(400).json({
        error: error.message
      });
    }
  }

  //get one blog post 
  static async getOne(req, res) {
    const id = req.params.blogid;
   try {
    const post = await blog.findById(id);
    if (!post) {
      res.status(404).json({
        Error: "blog not found"
      })
    }
      return res.status(200).json({
        message: "success",
        data: post
      });

    }
    catch (error) {
      res.status(404).json({
        Error: "blog not found"
      })
    }
  }
  // update one

  static async patchOne(req, res) {
    const id = req.params.blogid;
        const post = await blog.findById(id);
  
      if (!post) {
       return res.status(404).json({
        Error: "The blog you are trying does not exist"
      })
    }
      if (req.loggeduser.userId !== post.userId) {
      return res.status(403).json({
        Error:"You can't update which not belongs to you"
      })
    }
    try {
      const getone = await blog.updateOne(
        { _id: id },
        { $set: { title: req.body.title, subbody: req.body.subbody, body: req.body.body, blogimgs: req.file.path } }
      );
      res.status(200).json({
        message: "update blog post was successfully done",

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
       return res.status(404).json({
        Error: " Blog not found"
      })
    }
    if (req.loggeduser.userId !== post.userId) {
      return res.status(403).json({
        Error:"You can't delete which not belongs to you"
      })
    }

    try {
      const deleteone = await blog.remove({ _id: id });
     return  res.status(200).json({
        message: "delete  a blog post was successfully deleted!",
      });
    }
    catch (error) {
    return  res.status(404).json({
        error: error.message,
      });
    }
  }

}