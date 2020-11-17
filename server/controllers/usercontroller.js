import mongoose from "mongoose";
import usermodel from '../models/usermodel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';
const schema = {
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6).max(10)
}
export default class usercontroller {
    // find all users
    static async find(req, res) {
     

        try {
               const getalluser = await usermodel.find();
          return  res.status(200).json({
                message: "all  user are",
                data: getalluser
            })
        }
        catch (error) {
         return   res.status(404).json({
                message: error.message
            })
        }
    }
    // find one user
    static async getOne(req, res) {
        let id = req.params.uid;
        try {
            const getone = await usermodel.findById({ _id: id })

      return  res.status(200).json({
                message: "success",
                data: getone
            })
        }
        catch (error) {
            return res.status(400).json({
                message: error.message
            })

        }
    }
    static async patchOne(req, res) {
        const id = req.params.uid;
        // validate data 
        const { error } = Joi.validate(req.body, schema);
         if (error) {
          return  res.status(400).json({
            message: error.details[0].message
            })
        }
           const user = await usermodel.findById(id);
        if (!user) {
            return res.status(400).json({
                Error: "incorrect  email or password"
            })
        }
    if (req.loggeduser.userId !== id) {
      return res.status(403).json({
        Error:"You can't update user which not belongs to you"
      })
    }
        // hash the password 
        const salt = await bcrypt.genSalt(6);
        const hashpassword = await bcrypt.hash(req.body.password, salt);
        try {
            const updateone = await usermodel.updateOne(
                { _id: id },
                { $set: { email: req.body.email, password: hashpassword } }
            );
            return res.status(200).json({
                message: "Update user was successfully done",

            });
        } catch (error) {
           return res.status(404).json({
                error: error.message,
            });
        }

    }
    // signup routes
    static async postOne(req, res) {
        // validate data 
        const { error } = Joi.validate(req.body, schema);

        if (error) {
            res.status(400).json({
             Error: error.details[0].message
            })
        }
        const User = await usermodel.findOne({ email: req.body.email });
        if (user) {
            res.status(409).json({
                message: "email exist"
            })
        }
        // hash the password 
        const salt = await bcrypt.genSalt(6);
        const hashpassword = await bcrypt.hash(req.body.password, salt);
        // create a token 
        const token = jwt.sign({ email: req.body.email }, process.env.tokens);
        Joi.validate(req.body, schema);
        const user = usermodel({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hashpassword

        })
        try {
            const saveuser = await user.save();
        return    res.status(201).json({
                message: "User created successfully and logged in ",
                data: saveuser,
                token: token
            })
        }
        catch (error) {
          return  res.status(400).json({
                message: error.message
            })
        }
    }
    //   login route
    static async post(req, res) {
     const user = await usermodel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                Error: "Incorrect  email or password"
            })
        }
        const validpass = await bcrypt.compare(req.body.password, user.password);
        if (!validpass) {
            return res.status(400).json({
               Error: "Incorrect  email or password1"
            })
        }
        // create a token 
        const token = jwt.sign({ userId: user._id, email: req.body.email }, process.env.tokens,);
        res.header("auth-token", token)
        try {
            res.status(200).json({
                message: "You have successfully logged in as",
                data: user,
                token: token
            })
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            })
        }

    }
    // delete one user
    static async delete(req, res) {
        let id = req.params.uid;
        const user = await usermodel.findById({ _id: id })
        if (!user) {
         return   res.status(400).json({
                Error: "User you want to delete doesn't exist "
            })
        }
          if (req.loggeduser.userId === id) {
      return res.status(403).json({
        Error:"You can't update which not belongs to you"
      })
    }

        try {
            const userid = await usermodel.deleteOne({ _id: id });
            res.status(200).json({
                message: " user deleted successsfull",
            });
        }
        catch (error) {
        return    res.status(400).json({
                error: error.message,
            });
        }

    }
}