import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app.js';
// assertion stye
chai.should();
chai.use(chaiHttp);

describe('TEST MY API', () => {
//  GET all blog post routes
    describe('Test all endpoint  for blog post', () => {
        it("it should GET all the blog post", (done) => {
            chai.request(server)
                .get('/api/v1/blogs')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
            })
        })
               it("it should not GET all the blog posts", (done) => {
            chai.request(server)
                .get('/api/v1/blo')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
            })
               })
    // get one blog post 
        
               it("it should GET one   blog post", (done) => {
           const blogid = '5f9bb1538a075d2a24555953';
            chai.request(server)
                .get('/api/v1/blog/'+ blogid)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');

                    done();
            })
       })
            it("it should not GET one   blog posts", (done) => {
            chai.request(server)
                .get('/api/v1/blog')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
            })
            })
       let blogid = '5f9a794b0910db08c86bd445';
             it("it should not GET one becase of invalid id number", (done) => {
            chai.request(server)
                .get('/api/v1/blog'+blogid)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
            })
             })
             it("it should POST one  the blog post", (done) => {
           const blog = {
               title: "iso",
              subbody: "adsfgkewryewtrgfhdsgfjhksaf",
              body: "fsauhilqewryuyqwuyeutyuywuiter",
              blogimgs: ".img\\3571276a1e899da10db84620d3ba7508"
           }
        //    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmE4MGEzN2Q2ZGYwZjI2MjQ1ZDMwNTgiLCJlbWFpbCI6InJvYnpAZ21haWwuY29tIiwiaWF0IjoxNjA0ODQ4MTgzfQ.iKwY6vShvB7rqtdVP5ZllGLNZBLfHUM1c73bp15MwkA'
                 let token =null;
                chai.request(server)
                    .post('/api/v1/blog/')
                      .set('Content-Type', 'multipart/form-data')
                     .set('auth-token',token)
                   .send(blog)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    done();
            })
       })

    //        it("it should not  POST one  the blog post", (done) => {
    //        const blog = {
            
    //           subbody: "adsfgkewryewtrgfhdsgfjhksaf",
    //           body: "fsauhilqewryuyqwuyeutyuywuiter",
    //           blogimgs: "..\\routes\\img\\1f181cd553a84c49ac33e21b6a71edfd"
    //            }
    //        const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmE4MGEzN2Q2ZGYwZjI2MjQ1ZDMwNTgiLCJlbWFpbCI6InJvYnpAZ21haWwuY29tIiwiaWF0IjoxNjA0ODQ4MTgzfQ.iKwY6vShvB7rqtdVP5ZllGLNZBLfHUM1c73bp15MwkA'
               
    //         chai.request(server)
    //             .post('/api/v1/blog/')
    //             .set('auth-token',token)
    //             .send(blog)
    //             .end((err, res) => {
    //                 res.should.have.status(404);
                 
    //                 done();
    //         })
    //    })
})
 
   
         //post one question
   describe('POST /api/v1/question/', () => {
       it("it should POST one  question", (done) => {
           const quest = {
               fullname: "isofddffdf",
              email: "robz@gmail.com",
              subject: "fsauhilqew",
              message: "hdjhghskfjgjhfjkhgjfd"
           }
            chai.request(server)
                .post('/api/v1/question/')
                .send(quest)
                .end((err, res) => {
                    res.should.have.status(201);
                    // res.body.should.be.a('object');
                    done();
            })
       })
 

       it("it should not POST one  question", (done) => {
           const quest = {
              email: "adsfgkewryewtrgfhdsgfjhksaf",
              subject: "fsauhilqewryuyqwuyeutyuywuiter",
              message: "..\\routes\\img\\1f181cd553a84c49ac33e21b6a71edfd"
           }
            chai.request(server)
                .post('/api/v1/question/')
                .send(quest)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
            })
       })
 
   })
    //post one user
   describe('POST  create a new users', () => {
       it("it should POST one user", (done) => {
           const user = {
                 email:"robert2i@gmail.com",
                password:"123456"
            }
            chai.request(server)
                .post('/api/v1/signup')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    done();
            })
       })
    it("it should not create user because  user already exist", (done) => {
           const user = {
                 email:"roberti@gmail.com",
                password:"123456"
            }
            chai.request(server)
                .post('/api/v1/signup')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(409);
                    res.body.should.be.a('object');
                    done();
            })
    })
         it("it should not create user because  of invalid email", (done) => {
           const user = {
                email:"robertigmail.com",
                password:"123456"
            }
            chai.request(server)
                .post('/api/v1/signup')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
            })
       })

       it("it should not create user because password is rquired", (done) => {
           const quest = {
              email: "robz@gmail.com"
          
           }
            chai.request(server)
                .post('/api/v1/signup/')
                .send(quest)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
            })
       })
 
   })
      //login test 
   describe('POST  create a new users', () => {
       it("it should POST one user", (done) => {
           const user = {
                 email:"robert2i@gmail.com",
                password:"123456"
            }
            chai.request(server)
                .post('/api/v1/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
            })
       })
    it("it should not login user because  invalid email", (done) => {
           const user = {
                 email:"rober3t3@gmail.com",
                password:"123456"
            }
            chai.request(server)
                .post('/api/v1/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
            })
    })
         it("it should not create user because  of invalid password", (done) => {
           const user = {
                email:"robertigmail.com",
                password:"1234567"
            }
            chai.request(server)
                .post('/api/v1/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
            })
       })

       it("it should not create user because password is rquired", (done) => {
           const quest = {
              email: "robz@gmail.com"
          
           }
            chai.request(server)
                .post('/api/v1/signup/')
                .send(quest)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
            })
       })
 
       })
    
    
    
})




