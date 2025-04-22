# Server Side Rendering

Until now we were playing with json responses and all the interaction was done through json.

We had no Front-end/UI for the URL shortner project, now we'll work on adding it to the project.

Literal meaning on SSR is when the whole html page is rendered by the server.

1. One way of SSR is that you copy paste the whole html page inside the js file.

2. Second way to perform SSR is through template engines.
  ex -> Embedded Javascript Templating Engine(EJS)
     -> HandleBars
     -> pug js

#### Learning to work with EJS

1.  We'll first tell the express with which engine is it working with.

2. We will then create ejs files inside the views folder.

3. Instead of copy pasting all the contents of a html page inside a js file, we will now render the html page itself inside the /test route.

4. We can also pass variables within res.render 