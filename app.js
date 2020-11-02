import express from 'express';
import mongoose from 'mongoose';
import blogpost from './server/routes/blogpost.js';
import questroute from './server/routes/question.js';
import signuproute from './server/routes/user.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();
const app = express();
// connection to mangodb to an api
const mangoDB = `mongodb+srv://${process.env.dbuser}:${process.env.dbpass}@blog-db.bj3ci.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`
mongoose.connect(mangoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('open', () => {
    console.log("db connected")
})
db.on('error', () => {
    console.log("db connected falied");
})
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/v1', blogpost);
app.use('/api/v1', questroute);
app.use('/api/v1', signuproute);
app.use((req, res, next) => {
    res.status(404).json({
        message: "invalid url"
    })
})
const port = 5000;
app.listen(port, () => {
    console.log(`app is listening to localhost:${port}`)
})