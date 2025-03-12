A s we can see that the callback function we send while creating the server has become so complex and confusing at t his present time itself, even we hadn't really done anything hige till now. 

It is becoming complex because 
 1. i have to make case for each routes and have to mention the http methods specifically for each route 

 2. to parse the quesry parameters we had to use a complete different module to handle it , the url module

 3. we'llhave to use diffenet pakages for different functionalities in the  furture also.
 4. in order to make these things less complex, the express framwork comes to the screen 


 now in order to fetch the query parameters we do not have to use a complete different module for doing the same instead the app() will now handle it for us and we simply use the access of it in our code.