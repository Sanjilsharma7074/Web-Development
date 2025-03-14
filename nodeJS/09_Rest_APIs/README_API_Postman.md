Introduction to API Testing with Postman

In a web browser, we can only make limited HTTP requests, primarily GET requests. However, when we need to send POST, PUT, or DELETE requests, the browser does not provide a built-in way to do so. This is where Postman comes into play.

What is Postman?
Postman is a powerful utility tool that helps developers test and document APIs efficiently. It provides an interface for making various HTTP requests and viewing responses in a structured format.

Learning API Testing in Postman
Today, we will explore API testing using Postman and learn how to send different types of requests.

Understanding API Endpoints
In a browser, when the default HTTP method (GET) is enabled, we can retrieve data from specific endpoints:

/users → Displays the first_name of all users.
/api/users → Returns complete information about all users in JSON format.
/api/users/100 → Retrieves details of the user with id=100 or any other specified ID.

Making a POST Request in Postman
Since a browser does not support POST requests directly, we will use Postman to send data to our API. Our goal is to send a POST request to /api/users and append new user data to our JSON file using the fs module.

Handling Request Data in the Server
When new data is sent to the server, it is stored inside req.body in JSON format. Before the server can process this data, it must first be parsed by a URL-encoded middleware. This middleware helps the server identify the data type and process it accordingly.

Appending Data to the JSON File
Once the request data is available inside the body variable, we can append it to our JSON file using the push method.


Managing Data Updates
The new data will be appended to the JSON file each time we click "Send" in Postman.
To remove an entry, we must delete that user from the JSON file manually and restart the server. This ensures that new user IDs are assigned correctly when fresh data is inserted.


Why Use fs.writeFile() Instead of fs.appendFile()?
We use fs.writeFile() instead of fs.appendFile() because:

fs.writeFile() overwrites the entire file with the updated data.
The second parameter of fs.writeFile() includes both the original and newly inserted data, ensuring consistency.
fs.appendFile() would only append new data without modifying the existing structure, which could lead to incorrect JSON formatting.
By following this approach, we ensure that our API handles data updates efficiently while maintaining data integrity.