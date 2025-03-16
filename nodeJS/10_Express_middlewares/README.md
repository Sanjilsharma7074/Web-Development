# Middlewares Functionalities

1. Middleware functions are functions that have access to the request object(req), the response object(res), and the next middleware function in the application's request-response cycle.

2. The next middleware function is commonly denoted by variable named "next".

3. Middleware functions can perform the following tasks :
  - Execute any code
  - Make changes to the request and response objects.
  - End the req-res cycle.
  - Call the next middleware function in the stack.

4. we used app.use(express.urlencoded({extended:false})) middleware in our previous codes, which helped us parse the form data and then pass on the request to the next instructions.

#### We will now learn to make our own middlewares with the help of express.