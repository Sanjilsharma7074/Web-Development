# URL Shortner service

We are going to design a URL shortner service that takes in a valid URL and returns a shortened URL , redirecting the user to the previously provided URL.
###### Also keeps track of total visits/clicks on the URL.

## Routes

1. POST/URL - Generates a new short URL.
2. GET /:id - Redirects user to the original URL.
3. GET /URL/analytics/:id - Returns the clicks for the provided short id.