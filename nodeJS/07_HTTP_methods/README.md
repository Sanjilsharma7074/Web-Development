HTTP METHODS
1. we have following http methods - get, post, put, patch, delete.

2. get - when you want to get some data from the server.
       - when you enter a URL in your browser and press enter, the browser then makes the get request.
       - whenever our server receives GET request, the server goes to the database, and reads the data from the database, and this read data is then sent back to the client as a response.
       - Get is a default method of the browser.
       - In a nutshell, if you sent a GET request on your browser, you'll expect to see some data in return from the server to your request.

3. post - when you want to send(sign up forms, feedback forms -> the data collected through these forms will be saved inside the database
       as a new data, creating new data) and mutate some data in the server.

4. put - when you upload some file or some document in your forms.
       - To put something on our server. (the document, files, images are put on our server)

5. patch - To make variations in data.
         - There is already an entry inside the database(eg- I am already an user in facebook, but now i wish to change my username -> to change the already existing entry into something else.)

6. delete - to delete something (eg- i want to delete my facebook account.)