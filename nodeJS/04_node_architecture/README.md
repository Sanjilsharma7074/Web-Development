1. Client makes a request to the server.

2. Currently, our server is running on Nodejs.

3. Requests are queued inside the event queue.

4. Requests from event queue are then sent to the event loop( it is a type of mechanism which always have its watch upon the event queue).

5. Event loop fetch the request from the event queue on FIFO principal.

6. The request picked up from the event queue can be of two types -

    a. Blocking request(Synchronous task) - To resolve this request, the blocking operation is then sent to the thread pool (this pool consists of all the threads , thread can be considered a worker which are responsible for executing and fulfilling your blocking operations), a thread is assigned to each and every blocking request to execute that particular request , the response will then be sent back to the client.

    b. Non blocking request(Asynchrounous task) - This request will be processed without the need of any threads and the response will be sent back to the client.

NOTE - There are only some limited amount of threads for a specific PC or laptop and once all the threads are taken by some blocking operations, then the operations to be executed after it has to wait for the threads to complete the previous operation successfully first.

Hence, this can lead to a scalability issue if all the production code has been written with the help of blocking operations.

Therefore, it is advised to write the code with the help of non blocking operations.

# By default the size of the thread pool is 4, but we can increase it upto the size of CPU cores present in our system.