import express from 'express';
import mongoose from 'mongoose';
import blogpost from './server/routes/blogpost.js';
import questroute from './server/routes/question.js';
import commentroute from './server/routes/blog-comment';
import signuproute from './server/routes/user.js';
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();
const app = express();
// connection to mango db to an api

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Robert brand API documentation',
      version: '0.1.0',
      description:
        'This is my API documentation using swagger',
      contact: {
        name: 'Robert Niyitanga',
        url: 'https://rob-mybrand.netlify.app/ui/html',
        email: 'robertwilly668@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://my2api.herokuapp.com/',
      },
    ],
    produces: ['application/json'],
  },
  apis: ['../server/routes/*.js'],
};
const specs = swaggerJsdoc(options);
app.use(
  '/myband/api/documentation/',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);

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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', "Origin,X-Requested-Width,Content-Type,Accept,auth-token");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT,POST,GET,PATCH,DELETE')
        return res.status(200).json({});
    }
    next();
})

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
        Error: "invalid url"
    })

})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`app is listening to localhost:${port}`)
})
export default app;