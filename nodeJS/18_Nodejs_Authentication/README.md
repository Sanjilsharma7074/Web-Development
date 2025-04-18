# Authentication

There are 2 types of authentication 

1. Stateful - Which maintains state or data on the server side.

  - A client will request with their username and password on a server, in return server will give us back an unique id known as "session unique id" in technical term.
  
  - Server has already recorded the track of the uid sent by it to the client.

  - Whenever i'd wish to request anything on the server, i will show this uid to the server.

  - For ex-> if uid = 367 => if i am sending a GET request on /users on the server, then i'll also send the uid=367 along with it to the server.

  - Server will then check who is the user 367 and on the basis of permissions accessed and permission denied, server will then respond back to the client accordingly.

  This is how stateful authentication works.

  #### Now the question arised over here is of how to transfer the unique id ??
  
  You can get access to these unique id's through 
    - cookies -> we can use cookies in SSR.
    - response
    - headers -> Headers are preferred when working with REST APIs.

2. Stateless - Which has no state.

### Express Flow 

Let us now understand the express flow.

Client will request to the express server, in between we'll have an AUTH MIDDLEWARE, which will check for cookie value or uid, if valid , calls next() ,else rejects the request.

### Steps to add Authentication 

1. We had just one collection till now i.e. urls and now we'll create another collection called user to add authentication to our project successfully.

2. We'll now add different set of routes inside teh routes folder to successfully add authentication.

3. Let's first make a route for sign up within routes/user.js.

  - /user will have a post route within which we can create the new user.