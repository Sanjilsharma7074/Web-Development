Rest API - JSON

GET /users - HTML documnet rendered
GET /api/users - list all users in JSON format.
GET /api/users/1 - get the user with ID 1
GET /api/users/2 - get the user with ID 2

Dynamic Path Parameters
GET /api/users/:id
:id -> Variable | Dynamic
# Also known as Route Parameters (also called URL parameters):

POST /api/users - create new users

PATCH /api/users/id - edit the user with id 1 

DELETE /api/users/1 - delete the use with id=1