import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app.js';
// assertion stye
chai.should();
chai.use(chaiHttp);
       //post one comment
describe('QUESTION ROUTES TESTING', () => {
             it("it should get all comments ", (done) => {
	    
            chai.request(server)
                .get('/api/v1/comments/')
	         .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
            })
             })
           it("it should not get all comments ", (done) => {
	    
            chai.request(server)
                .get('/api/v1/comments/r')
	         .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    done();
            })
       })
       it("it should POST one  comment", (done) => {
	       let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmE5NzhjYTc2NGRiZTJlYjRmMGY4MTgiLCJlbWFpbCI6ImNocmlzQGdtYWlsLmNvbSIsImlhdCI6MTYwNjMwNzQ4MH0.IERC80yOUdvFWukPOhmL_aSi9AcJjH0htnRNzjPDZOU';
           const comment_create = {
               fullname: "isofddffdf",
              email: "robz@gmail.com",
            comment: "hdjhghskfjgjhfjkhgjfd"
           }
            chai.request(server)
                .post('/api/v1/comment/create/')
                .set('auth-token',token)
	       
                .send( comment_create )
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    done();
            })
       })
 

       it("it should not POST one  comment", (done) => {
	       let token='dfdf';
	       
           const  comment_create  = {
              email: "Robert@gmail.com",
              subject: "hey",
              comment: "fdg"
           }
            chai.request(server)
                .post('/api/v1/comment/create')
                .send(comment_create )
                .set('auth-token',token)
	         .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
            })
       })
         it("it should update one  comment", (done) => {
	       let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmE5NzhjYTc2NGRiZTJlYjRmMGY4MTgiLCJlbWFpbCI6ImNocmlzQGdtYWlsLmNvbSIsImlhdCI6MTYwNjMwNzQ4MH0.IERC80yOUdvFWukPOhmL_aSi9AcJjH0htnRNzjPDZOU';
             let id = "5fa91dfe057dd22c18da3d0f";
             const comment_create = {
               fullname: "isofddffdf",
              email: "robz@gmail.com",
            comment: "hdjhghskfjgjhfjkhgjfd"
           }
            chai.request(server)
                .patch('/api/v1/comment/update/'+id)
                .set('auth-token',token)
	       
                .send( comment_create )
                .end((err, res) => {
                    res.should.have.status(403);
                    res.body.should.be.a('object');
                    done();
            })
         })

              it("it should not update one comment because of invalid token ", (done) => {
	       let token='yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmE5NzhjYTc2NGRiZTJlYjRmMGY4MTgiLCJlbWFpbCI6ImNocmlzQGdtYWlsLmNvbSIsImlhdCI6MTYwNjI4NjgxOSwiZXhwIjoxNjA2Mjk3NjE5fQ.kjc-wfbz0oUC17gV6uSCu-asMWKjo-msvPjuaSv4KKc';
             let id = "5fa91dfe057dd22c18da3df";
	       
                  const comment_check = {
              fullname: "robz@gmail.com",
              email: "chet@gmail.com",
     
              comment: "how t install npm  packages in nodes?"
           }
            chai.request(server)
            .patch('/api/v1/comment/update/'+id)

                .send(comment_check)
                .set('auth-token',token)
	         .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
            })
              })
             it("it should not POST one comment because of unauthorized ", (done) => {
             let id = "5fa91dfe057dd22c18d3df";
	       
                  const comment_check = {
              fullname: "robz@gmail.com",
              email: "chet@gmail.com",
     
              comment: "how t install npm  packages in nodes?"
           }
            chai.request(server)
            .patch('/api/v1/comment/update/'+id)

                .send(comment_check)
	         .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.a('object');
                    done();
            })
             })
       it("it should not update  one  comment", (done) => {
           let token = 'dfdf';
             let id = "5fa91dfe057dd22c18da3ydf";
           
	       
           const  comment_create  = {
              email: "Robert@gmail.com",
              subject: "hey",
              comment: "fdg"
           }
            chai.request(server)
                           .patch('/api/v1/comment/update/'+id)

                .send(comment_create )
                .set('auth-token',token)
	         .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
            })
       })
              it("it should not update one comment because of invalid token. ", (done) => {
             let id = "5fa91dfe057dd22djhgfc18da3df";
            let token = "eJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmE5NzhjYTc2NGRiZTJlYjRmMGY4MTgiLCJlbWFpbCI6ImNocmlzQGdtYWlsLmNvbSIsImlhdCI6MTYwNjMwNzQ4MH0.IERC80yOUdvFWukPOhmL_aSi9AcJjH0htnRNzjPDZOU";
                  const comment_check = {
              fullname: "robz@gmail.com",
              email: "chet@gmail.com",
     
              comment: "how t install npm  packages in nodes?"
           }
            chai.request(server)
                .patch('/api/v1/comment/update/'+id)
                .send(comment_check)
                .set('auth-token',token)
	         .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
            })
              })
             it("it should not update  one comment because of unauthorized ", (done) => {
             let id = "5fa91dfe057dd22djhgfc18da3df";
	       
                  const comment_check = {
              fullname: "robz@gmail.com",
              email: "chet@gmail.com",
     
              comment: "how to install npm  packages in nodes?"
           }
            chai.request(server)
                .patch('/api/v1/comment/update/'+id)
                .send(comment_check)
	         .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.a('object');
                    done();
            })
       })
 
   })