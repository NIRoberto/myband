[![Build Status](https://travis-ci.com/NIRoberto/myband1.svg?branch=develop)](https://travis-ci.com/NIRoberto/myband1)[![Coverage Status](https://coveralls.io/repos/github/NIRoberto/myband1/badge.svg?branch=ch-increase-coverage)](https://coveralls.io/github/NIRoberto/myband1?branch=ch-increase-coverage)
# Capstone Project : Portfolio+Brand Website
 ## Table of contents
## Capstone project: Portfolio+brand website
## Table of contents
## General Info
Technologies Used
Setup
Features
Endpoints
Documentation
Templates
Status

### General Info
Portfolio and Brand is a personal website the help the owner to brand or publish him/her self. so that any one who reahes to this page can be able to know the owner, what he do, his experience, his skills, and view different article he wrote and view his portfolio projects. the visitor can chosse to contact him if he/ she really need to know more about him.

This Repository contains Front end and Backend, front end is in folder called Templates and Backend is in folder called Server , The server Hosted on Heroku and Front end hosted on Github Pages.

Technologies Used
- HTML5
- CSS3
- NodeJS
- Express
- ES6
- Setup

- clone the repository using git clone https://github.com/NIRoberto/myband1.git
- Move into project directory using cd capstoneproject
- Install neccesary packages using npm install
- Build the source using npm run build
- Start the server using npm run start

## Interface the API using postman or any other http client
## Features
- User can create an account
- User can update profile information
- User can get all users registred
- User can get him/her profile information
- User can login
- User can create new blog
- User can update an existing blog
- User can search any blog
- User can View list of all blogs
- User can Delete an exisiting blog
- User can make a comment to a specific blog
- User can view the list of comment to any blog
- User can send contact message
- User can view list of all contact messages (either questions or messages)
- Endpoints
- Endpoint	Method	Functionalities
/api/v1/signup	POST	Create user account
/api/v1/login	POST	Sigin into account
/api/v1/users	GET	get all users
/api/v1//users//update:id	PUT	update user profile information
/api/v1/blogs	POST	create new Blog
/api/v1/blog/update/:id	PUT	update an existing blog
/api/v1/blogs/delete/:id	DELETE	delete an existing blog
/api/v1/blogs	GET	get list of all blogs

/api/v1/blog/:id	GET	get single blog infomation
/api/v1/comments/:id	POST	create a comment to selected blog
/api/v1/comments/:id	GET	get all comments from selected blog
/api/v1/contacts	POST	send a contact (message or question)
/api/v1/contacts	GET	get all questions

# Documentation
The API documentation can be found at : swagger 

# Templates
The UI Templates can be found at : https://robzweb.netlify.app/ui/html/

# Status
The project is hosted on heroku

Copyright (c)  Robert Niyitanga
