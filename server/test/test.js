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
           const blogid = '5fa812e91cbc6b0017423fc5';
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
         
       let blogid = '5f9a794b0910db08c86bd445';
             it("it should not GET one because of invalid id number", (done) => {
            chai.request(server)
                .get('/api/v1/blog'+blogid)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
            })
             })
        
//              it("it should POST one  the blog post", (done) => {
//            let token =null;
//                 chai.request(server)
//                     .post('/api/v1/blog/')
//                       .set('Content-Type', 'multipart/form-data')
//                      .set('auth-token',token)
//                      .field('title','this is test title')
//                      .field('subbody', 'this is content from testing')
// 			         .field('body','this is content from testing')
//                      .field('blogimgs','brand.jpg')
//                     .end((err, res) => {
//                     res.should.have.status(201);
//                     res.body.should.be.a('object');
//                     done();
//             })
//        })

           it("it should not  POST one  the blog post", (done) => {
           const blog = {
            
             subbody: "adsfgkewryewtrgfhdsgfjhksaf",
              body: "fsauhilqewryuyqwuyeutyuywuiter",
              blogimgs: ".\\img\\1f181cd553a84c49ac33e21b6a71edfd"
               }
            const token = null;
            chai.request(server)
                .post('/api/v1/blog/')
                .set('auth-token',token)
                .send(blog)
                .end((err, res) => {
                    res.should.have.status(400);
                 
                    done();
            })
           })
//          // get one blog post 
//         let token = null;
//         it("it should  delete  one   blog post", (done) => {
//            const blogid = '5fa5281946ff525870d6fc77';
//             chai.request(server)
//                 .delete('/api/v1/blog/delete' +blogid)
//                 .set('auth-token',token)
//                 .end((err, res) => {
//                     res.should.have.status(200);
//                     res.body.should.be.a('object');
//                   done();
//             })
//        })
         
        it("it should not delete one blog post because of invalid id number", (done) => {
                 
            chai.request(server)
                .delete('/api/v1/blog/delete'+blogid)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
            })
            })
})
 
   
//          //post one question
//    describe('POST /api/v1/question/', () => {
//        it("it should POST one  question", (done) => {
//            const quest = {
//                fullname: "isofddffdf",
//               email: "robz@gmail.com",
//               subject: "fsauhilqew",
//               message: "hdjhghskfjgjhfjkhgjfd"
//            }
//             chai.request(server)
//                 .post('/api/v1/question/')
//                 .send(quest)
//                 .end((err, res) => {
//                     res.should.have.status(201);
//                     // res.body.should.be.a('object');
//                     done();
//             })
//        })
 

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
    describe('Test all endpoint for the users', () => {
        it("it should POST/create one user", (done) => {
            const user = {
                email: "robert2i6@gmail.com",
                password: "123456"
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
                email: "roberti@gmail.com",
                password: "123456"
            }
            chai.request(server)
                .post('/api/v1/signup')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(409);
                    res.body.should.be.a('object');
                    done();
                });
        });
        it("it should not create user because  of invalid email", (done) => {
            const user = {
                email: "robertigmail.com",
                password: "123456"
            }
            chai.request(server)
                .post('/api/v1/signup')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });

        it("it should not create user because password is required", (done) => {
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
                });
        });
        it("it should login a user ", (done) => {
            const user = {
                email: "robert2i@gmail.com",
                password: "123456"
            }
            chai.request(server)
                .post('/api/v1/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        it("it should not login user because  invalid email", (done) => {
            const user = {
                email: "rober3t3@gmail.com",
                password: "123456"
            }
            chai.request(server)
                .post('/api/v1/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });
        it("it should not login user because  of invalid password", (done) => {
            const user = {
                email: "robertigmail.com",
                password: "1234567"
            }
            chai.request(server)
                .post('/api/v1/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });

        it("it should not login user because password is rquired", (done) => {
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
                });
        });
 
    });

    })




