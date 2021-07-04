https://github.com/dented-academy/fswdi-curriculum/blob/master/unit2/2.1/express/README.md
$ npm install ejs --save
// main.js
const express = require('express')
const app = express()
const port = 3000

app.set('views', './views') // Folder to our views
app.set('view engine', 'ejs') // Engine to render our views

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

Add views
$ mkdir views
$ touch views/home.ejs

<!-- views/home.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to express.js!></title>
</head>
<body>
  <h1>Express and EJS</h1>
  <div class="container">
    <p> This is a paragraph of text. Yay! </p>
  </div>
</body>
</html>

{/* EJS Syntax */}
<% normal javascript for control-flow %>
<%= Outputs the value into the template that is HTML escaped (treat content as text) %>
<%= "<h1>Hi</h1>" %> outputs as text
<%- Outputs the value into the template that is NOT HTML escaped (treat content as HTML) %>
<%- "<h1>Hi</h1>" %> outputs as actual HTML element
{/* Logging With Middleware */} $ npm install morgan --save
 {/* main.js */}
const morgan = require('morgan')
// ...
$ mkdir routes
$ touch routes/index.js
$ mkdir views/_partials
$ touch views/_partials/head.ejs views/_partials/page-title.ejs

SCSS set up

<!-- <h3 class="m">Title: <%= auction.title %></h3>
  <h3 class="m">Description: <%= auction.description%></h3>
  <h3 class="m">Price: $<%= auction.price%></h3>
  <img
    class="m"
    src="<%= auction.image || 'https://i1.wp.com/www.mnleadership.org/wp-content/uploads/2017/02/Anonymous-Avatar.png?ssl=1' %>"
    alt="image"
    style="width: 500px; height: auto;"
  > -->