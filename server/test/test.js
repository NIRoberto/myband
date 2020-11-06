import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app.js';
// assertion stye
chai.should();
chai.use(chaiHttp);

describe('TEST MY API', () => {
//  GET all blog post routes
    describe('GET /api/v1/blogs', () => {
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
                .get('/api/v1/blogs')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
            })
    })
})
    // get one blog post 
   describe('GET /api/v1/blog/:blogid', () => {
       it("it should GET one  the blog post", (done) => {
           const blogid = '5f9a7c7d6d157a412c36b40d';
            chai.request(server)
                .get('/api/v1/blog/'+blogid)
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


   })
      // get one blog post 
   describe('POST /api/v1/blog/', () => {
       it("it should POST one  the blog post", (done) => {
           const blog = {
               title: "iso",
              subbody: "adsfgkewryewtrgfhdsgfjhksaf",
              body: "fsauhilqewryuyqwuyeutyuywuiter",
              blogimgs: "..\\routes\\img\\1f181cd553a84c49ac33e21b6a71edfd"
           }
            chai.request(server)
                .post('/api/v1/blog/')
                .send(blog)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    done();
            })
       })
           it("it should not  POST one  the blog post", (done) => {
           const blog = {
            
              subbody: "adsfgkewryewtrgfhdsgfjhksaf",
              body: "fsauhilqewryuyqwuyeutyuywuiter",
              blogimgs: "..\\routes\\img\\1f181cd553a84c49ac33e21b6a71edfd"
           }
            chai.request(server)
                .post('/api/v1/blo/')
                .send(blog)
                .end((err, res) => {
                    res.should.have.status(404);
                 
                    done();
            })
       })
 
   })
         //post one question
   describe('POST /api/v1/question/', () => {
       it("it should POST one  question", (done) => {
           const quest = {
               fullname: "isofddffdf",
              email: "adsfgkewryewtrgfhdsgfjhksaf",
              subject: "fsauhilqewryuyqwuyeutyuywuiter",
              message: "..\\routes\\img\\1f181cd553a84c49ac33e21b6a71edfd"
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
 

       it("it should POST one  question", (done) => {
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
                    // res.body.should.be.a('object');
                    done();
            })
       })
 
       })
    
    
})


//  get users 

