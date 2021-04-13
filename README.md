# JS Code Challenge sent by Pinho
JS application developed to solve the challenged proposed by Pinho. Both backend and frontend were developed by me to solve this.

## Languages, Frameworks and Technologies
> ![npm](https://img.shields.io/npm/v/express?color=black&label=NodeJS&logo=node.js)
> ![ts](https://flat.badgen.net/badge/-/TypeScript/blue?icon=typescript&label)
> ![postgres](https://img.shields.io/badge/postgresql-10.0-blue?label=PostgreSQL&logo=postgresql)
> ![docker](https://img.shields.io/badge/3.3.0-blue?label=Docker&logo=docker)
> ![npm](https://img.shields.io/npm/v/express?color=black&label=Express&logo=node.js)
> ![npm](https://img.shields.io/npm/v/react?color=black&label=React&logo=react)
> ![npm](https://img.shields.io/npm/v/knex?color=black&label=Knex&logo=wolfram&logoColor=orange)
> ![](https://img.shields.io/badge/token-JWT-informational)
> ![](https://img.shields.io/badge/mail-mailtrap-informational)
> ![](https://img.shields.io/badge/cloud-cloudnary-informational)

## Summary
**We need you to build basically a CRUD of products of e-commerce with some requirements. Here are the user stories you need to follow to develop the application**

### User stories
-   As a user, I want to create a product with at least these fields: name, description, price and published_at :heavy_check_mark:
-   As a user, I want to upload one or more images to the product. :heavy_check_mark:
-   As a user, I want to list all the products I've created. :heavy_check_mark:   
-   As a user, I want to update and soft deletes a product. :heavy_check_mark:
-   As a user, I want to confirm my email to start using the application. :heavy_check_mark:
-   As a guest, I want to sign up and sign in to the application. :heavy_check_mark:
-   As a new user, I need to confirm my email address to start using the application. :heavy_check_mark:
### Requirements:
1.  Technologies you must use but not only: React, Typescript, Nodejs, PostgreSQL    
2.  All emails should be sent in background jobs not affecting user experience. You can use Mailtrap as a server for testing purposes.    
3.  You can use local or cloud storage for managing files.    
4.  You can use any frontend and backend frameworks you want like Next, Gatsby, Express, TailwindCSS, Bootstrap etc.    
5.  Don't use any pre-built template in ThemeForest or similar. You can use their design to get inspiration if you want, but do not use their files.    
6.  You can use pre-built components for Bootstrap or TailwindUI.    
7.  Don't worry too much about the UI/UX. Focus on the core features.    
8.  There are a lot more features in e-commerce but don't worry, do whatever you think it's important to complete those user stories.

## API
### Response Codes 
```
200: Success
201: Created
401: Unauthorized
400: Bad Request
50X: Server Error
```
### Endpoints
``` 
1. /login -> POST - Authentication
2. /users -> GET - List all registered users
3. /users -> POST - Create a new user
4. /confirm/:confirmationCode -> GET - E-mail confirmation
5. /products -> GET - List all products
6. /products -> POST - Create a new product
7. /products -> PUT - Edit a product
8. /products -> DELETE - Delete a product by it`s ID
```
## Frontend
### First view - Sign in / Sign up
![image](https://user-images.githubusercontent.com/21188945/114625187-3eeae980-9c88-11eb-97a7-411363fcdee9.png)
![image](https://user-images.githubusercontent.com/21188945/114625218-47dbbb00-9c88-11eb-9bfb-03b50c361b61.png)
### Home Dashboard
![image](https://user-images.githubusercontent.com/21188945/114625281-5e821200-9c88-11eb-8391-f134dfa49641.png)
### Create a new product
![image](https://user-images.githubusercontent.com/21188945/114625343-75c0ff80-9c88-11eb-85c1-de027f5f983c.png)
### List all products
![image](https://user-images.githubusercontent.com/21188945/114625353-7fe2fe00-9c88-11eb-83cf-cc4f3bd05c64.png)
### List my products
![image](https://user-images.githubusercontent.com/21188945/114628071-ab67e780-9c8c-11eb-8368-875e385b4502.png)
### Edit a product

### List all users
![image](https://user-images.githubusercontent.com/21188945/114625725-13b4ca00-9c89-11eb-90dd-f70d7e79b9ae.png)
### Create a new user
![image](https://user-images.githubusercontent.com/21188945/114625750-1ca59b80-9c89-11eb-8805-5d835d0fb1cf.png)
## Next steps
```
1. Create unit tests
2. Remove images of an especific product
3. Remove users
4. Edit users
5. ...
```
