# mindFULL 

## Purpose

Through my experience in education and as an administrative professional in pediatrics, I observed a lack of resources for education and support with regard to children and their mental health that became more apparent as the COVID-19 pandemic necessitated a transition to remote learning.

Utilizing the MERN tech stack, I am developing an application called MindFULL, a platform designed as supplemental technology for existing learning management systems to provide students with streamlined access to mental health resources, the ability to self-assess their current state, and the option to communicate directly with their school counselor.

## Version 1.1 is live! 

Students can create an account, complete a daily mental health log, and view their past logs. 
Admins now have permissions to create, update, delete resource posts. 

## Currently working on V1.2

Now that the MVP is complete, this phase includes the following features and capabilities:
 - Add instant messaging between students and school counselor
 - Add Google OAuth back into project for Google Classroom integration

 ## Stretch goals

 What I'd like to accomplish in future versions:
 - User statistics - enable/update some kind of pictoral representation of student log data
 - Create a filter to alert school counselor based on specific content of student logs
 - Create a counselor scheduling platform or integrate an existing API
 

### Tech Stack:
- Node.js
- express
- express-session (sessions, cookies)
- express-flash (error handling)
- EJS (server-side templating)
- Bootstrap
- flash
- mongoDB
    - mongoose
    - connect-mongo (store sessions)
- passport (auth)
- passport-local
- passport-local-mongoose
- dotenv
- method-override (allows put/delete requests to be made from templates) - alternative to adding frontend JS
- morgan (logging)
- async
- bcrypt 
- cors
- validator

### Dev dependencies:
- nodemon
