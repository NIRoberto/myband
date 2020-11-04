import mongoose from "mongoose";
import usermodel from '../models/usermodel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';
const schema = {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).max(10).required()
}
export default class usercontroller {
    // find all users
    static async find(req, res) {
        const getalluser = await usermodel.find();

        try {
            res.status(200).json({
                message: "all  user are",
                data: getalluser
            })
        }
        catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    }
    // find one user
    static async getOne(req, res) {
        let id = req.params.uid;
        try {
            const getone = await usermodel.findById({ _id: id })

            res.status(200).json({
                message: "success",
                data: getone
            })
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            })

        }
    }
    static async patchOne(req, res) {
        const id = req.params.uid;
        // validate data 
        const { error } = Joi.validate(req.body, schema);
        if (error) {
            res.status(400).json({
                message: error.details[0].message
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
            res.status(200).json({
                message: "update user was successfull done",

            });
        } catch (error) {
            res.status(404).json({
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
                message: error.details[0].message
            })
        }
        const emailexist = await usermodel.findOne({ email: req.body.email });
        if (emailexist) {
            res.status(400).json({
                message: "email exist"
            })
        }
        // hash the password 
        const salt = await bcrypt.genSalt(6);
        const hashpassword = await bcrypt.hash(req.body.password, salt);
        //  create a token 
        const token = jwt.sign({
            _id: req.params.id,
            email: req.body.email
        }, process.env.tokens);

        Joi.validate(req.body, schema);
        const user = usermodel({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hashpassword

        })
        try {
            const saveuser = await user.save();
            res.status(201).json({
                message: "user created successfully and logged in ",
                data: saveuser,
                token: token
            })
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
    //   login route
    static async post(req, res) {
        const { error } = Joi.validate(req.body, schema);
        if (error) {
            res.status(400).json({
                message: error.details[0].message
            })
        }
        const user = await usermodel.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({
                message: "invalid email"
            })
        }
        const validpass = await bcrypt.compare(req.body.password, user.password);
        if (!validpass) {
            res.status(400).json({
                message: "invalid password"
            })
        }
        // create a token 
        const token = jwt.sign({ _id: new mongoose.Types.ObjectId(), email: req.body.email }, process.env.tokens);
        res.header("auth-token", token)
        try {
            res.status(200).json({
                message: "You have successfull logged in as",
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
        const getone = await usermodel.findById({ _id: id })
        if (!getone) {
            res.status(400).json({
                message: "invalid id number"
            })
        }

        try {
            const userid = await usermodel.deleteOne({ _id: id });
            res.status(200).json({
                message: " user deleted successsfull",
            });
        }
        catch (error) {
            res.status(400).json({
                error: error.message,
            });
        }

    }
}