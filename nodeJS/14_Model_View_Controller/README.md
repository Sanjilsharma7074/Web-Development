# MVC - Model View Controller

1. Controller manipulates the model.

2. Model updates the view.

3. The server.js file has been polluted due to a bulk of code, which leads to a maintainability issue.

5. This will create a chaos when we'll work with multiple users, schemas and objects.

6. Hence the bulky code will be refactored into Model View Controller.

7. Since we only have one model in the main file -> user model , this will now be stored inside the model folder and will be exported from there.

8. We'll then make routes, which will be exported from the route folder. We will make a completely separate router.

9. We have a different file for the connection of mongoDB too, inside the connection.js, which is then imported inside the server.js file.

10. Middleware which helps us to append the data into the file is also imported from a differnt file.

11. http handler functions are called controllers, and these controllers will also be imported from a different folder.

  - Controllers consist of some functions which we will attach with our routes.