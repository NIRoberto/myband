import express from 'express';
import mongoose from 'mongoose';
import blogpost from './server/routes/blogpost.js';
import questroute from './server/routes/question.js';
import commentroute from './server/routes/blog-comment';
import signuproute from './server/routes/user.js';
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();
const app = express();
// connection to mangodb to an api
const mangoDB = `mongodb+srv://${process.env.dbuser}:${process.env.dbpass}@blog-db.bj3ci.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`
mongoose.connect(mangoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;
db.on('open', () => {
    console.log("db connected")
})
db.on('error', () => {
    console.log("db connected falied");
})
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.status(200).json({
     message: "Welcome to my blog's backend API"
    });
});

app.use('/api/v1', blogpost);
app.use('/api/v1', questroute);
app.use('/api/v1', signuproute);
app.use('/api/v1', commentroute);


app.use((req, res, next) => {
    res.status(404).json({
        message: "invalid url"
    })

})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`app is listening to localhost:${port}`)
})
export default app;