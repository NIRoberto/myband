Capstone Project : Portfolio+Brand Website
Table of contents
Capstone project: Portfolio+brand website
Table of contents
General Info
Technologies Used
Setup
Features
Endpoints
Documentation
Templates
Status
General Info
Portfolio and Brand is a personal website the help the owner to brand or publish him/her self. so that any one who reahes to this page can be able to know the owner, what he do, his experience, his skills, and view different article he wrote and view his portfolio projects. the visitor can chosse to contact him if he/ she really need to know more about him.

This Repository contains Front end and Backend, front end is in folder called Templates and Backend is in folder called Server , The server Hosted on Heroku and Front end hosted on Github Pages.

Technologies Used
HTML5
CSS3
NodeJS
Express
ES6
Setup
clone the repository using git clone https://github.com/nellyganza/Elysee-CapstoneProject.git
Move into project directory using cd capstoneproject
Install neccesary packages using npm install
Build the source using npm run build
Start the server using npm run start
Interface the API using postman or any other http client
Features
User can create an account
User can update profile information
User can get all users registred
User can get him/her profile information
User can login
User can create new blog
User can update an existing blog
User can search any blog
User can View list of all blogs
User can Delete an exisiting blog
User can create new portfolio
User can update an existing portfolio
User can search any portfolio
User can View list of all portfolio
User can Delete an exisiting portfolio
User can make a comment to a specific blog
User can view the list of comment to any blog
User can send contact message
User can view list of all contact messages (either questions or messages)
Endpoints
Endpoint	Method	Functionalities
/api/v1/users/signup	POST	Create user account
/api/v1/users/login	POST	Sigin into account
/api/v1/users	GET	get all users
/api/v1//users/:id	PUT	update user profile information
/api/v1//users/:id/image	GET	get user profile picture
/api/v1/blogs	POST	create new Blog
/api/v1/blogs/:id	PUT	update an existing blog
/api/v1/blogs/:id	DELETE	delete an existing blog
/api/v1/blogs	GET	get list of all blogs
/api/v1/blogs/:id/image	GET	get specific blog image
/api/v1/blogs/:id	GET	get single blog infomation
/api/v1/comments/:id	POST	create a comment to selected blog
/api/v1/comments/:id	GET	get all comments from selected blog
/api/v1/contacts	POST	send a contact (message or question)
/api/v1/contacts	GET	get all questions
/api/v1/portfolios	POST	create new portfolio
/api/v1/portfolios/:id	PUT	update an existing portfolio
/api/v1/portfolios/:id	DELETE	delete an existing portfolio
/api/v1/portfolios	GET	get all portfolios
/api/v1/portfolios/:id/image	GET	get portfolios image
/api/v1/portfolios/:id	GET	get single portfolio by id
Documentation
The API documentation can be found at : 

Templates
The UI Templates can be found at : https://robzweb.netlify.app/ui/html/

Status
The project is hosted on heroku

Copyright (c)  Robert Niyitanga
