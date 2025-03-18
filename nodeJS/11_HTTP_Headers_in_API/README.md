# HTTP Headers

1. With every request and response network packets, each packet consists of actual data inside it, but there is always some additional information on the packet - where the packed has been received from , where will it be located to , the size of the data that the packet carries - all this info about the packet is present inside the header.

2. HTTP Headers are an important part of the API request and response as they present the meta-data(data about data) associated with the API request and response.

3. Headers carry information for the request and response body.

### example - a request message can use headers to indicate its preferred media formats , while a response can use a header to indicate the media format of the returned body.

4. Always add X to custom headers.

5. Application of using headers - 

  - app.use(express.urlencoded({ extended: false }));

  - when we sent the data (int the body tab) in the form of the the "form data" , the content-type will automatically take the value as "application/x-www-form-urlencoded".

  - If we would have chosen the data to be sent in the json format, the value of content-type would then have been altered by "application/json".

  #### This is how the value of the content-type header will change according to the data sent in the body.

  - Let us understand the working of the express.urlencoded middleware here, internally , the middleware would have first checked the value of the content-type header in the header sections.

  - if the value of the content-type = "application/x-www-form-urlencoded" , only then , the value of the body would had been sent to the express.middleware to parse it into a object , which further would be stored into the req.body.

  - if the value is not the same, then the middleware would just call the next().