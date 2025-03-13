Understanding RESTful APIs

A RESTful API (Representational State Transfer API) is a way for different systems to communicate with each other over the internet. It follows certain rules and principles to ensure smooth and efficient interaction between a client (such as a web browser or mobile app) and a server (where the data is stored).

1. 1st Rule of REST API – Client-Server Architecture

A REST API follows a client-server architecture, which means the client and server should be independent of each other.
The client is responsible for making requests and displaying data (e.g., a web app, mobile app, or any other device).
The server processes requests, retrieves or stores data, and sends responses.
The client should not rely on the server to handle the way the data is displayed. Instead, the client should receive data from the server and handle its own rendering.

    a. Server-Side Rendering (SSR) vs. Client-Side Rendering (CSR)
        SSR (Server-Side Rendering): The server processes the page and sends a fully rendered page to the client. This is faster and more efficient than CSR because the server does most of the work before sending the result.
    b. CSR (Client-Side Rendering): The server sends raw data to the client, and the client (usually using JavaScript) processes and displays it. CSR is used  when  we are not sure whether the client is a browser or another type of device, such as a mobile app.
    
2. 2nd Rule of REST API – Respect HTTP Methods

A REST API should use the correct HTTP methods instead of using just one method (like POST) for everything. Here’s how each method should be used:

GET → Retrieve data (e.g., getting user details from a database).
POST → Create new data (e.g., adding a new user).
PUT → Update existing data (e.g., changing user details).
DELETE → Remove data (e.g., deleting a user from a database).
Using the correct HTTP methods makes the API more structured, readable, and easier to maintain. Instead of writing something like POST /deleteUser?id=5, we should use DELETE /users/5 because DELETE is specifically meant for removing data.