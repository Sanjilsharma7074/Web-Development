# HTTP response status code 

- HTTP response status codes indicate whether a specific HTTP request has been successfully completed or not, and if not what kind issue is it really faicng - client error ? server error ? 

1. Informational Responses (100-199)

2. Successful Responses (200-299)

  - 201 -> Created Successfully (The request succeeded , and a new resource was created as a result.)

3. Redirection Messages (300-399)

4. Client Error Responses (400-499)

  - 400 -> Bad request (The server cannot process the request due to a client error)

  - 401 -> Unauthorized (Semantically this response mean "unauthenticated" i.e the client must first login or sign up)

  - 402 -> Payement required (credits of your card are expired)

  - 403 -> Forbidden (You have already logged in , but even then you are not allowed to access that information)

  - 404 -> NOT FOUND
    application - http://localhost:8000/api/users/2000 -> to give an ID which does not exist at all

5. Server Error responses (500-599)

  - code error or logical error in your server

  - 500 -> Internal Server Error

  - 501 -> HTTP methods are not implemented