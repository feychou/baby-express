# NodeJS with Express

Create a folder `exercises_express` then go to this folder in your terminal and execute:

```sh
npm init -y
```

### Exercise 1 ([Help](http://expressjs.com/guide/routing.html))

Install express into your directory with the `npm install express` command.
In order to open a server on port 3000, create an `server.js` file and add this content:

```js
import express from 'express';

const app = express();
app.listen(3000, () => console.log('Server running on port 3000'));
```
You can now open http://localhost:3000 in the browser.
If you see an error, that is expected behaviour as we haven't defined any `get` route yet. Still, it means your server is up and running.

### Exercise 2 ([Help](https://expressjs.com/en/guide/routing.html))
In this exercise, you are going to create an index route with the `get` method.
In `server.js`, create the get index route and have it output the string 'How are you?'.

### Exercise 3 ([Help](http://expressjs.com/fr/4x/api.html#res.sendFile))

In this exercise, you are going to create the homepage for your app and serve it on the `home` route.
Create a new directory `public` and inside it, create a html file called `homepage.html` and write this content in it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello</title>
</head>
<body>
  <h1>How are you?</h1>
</body>
</html>
```

In `server.js`, get express to send this file when hitting the route `home` (at http://localhost:3000/home)

### Exercise 4 ([Help](http://expressjs.com/fr/4x/api.html#res.json))

In this exercise you'll get your server to send back some JSON when a _PUT_ request is performed.
The JSON will look like this:

```js
{"good" : "yep"}
```

In `server.js`, get express to send this json when hitting the route `home` with the method _PUT_.
Try out your request with postman or curl.

### Exercise 5 ([Help](https://ejs.co/) && [Help](http://expressjs.com/guide/using-template-engines.html) && [Help](https://scotch.io/tutorials/use-ejs-to-template-your-node-application))

Create a directory `views` under the root directory of your project. Add a file with this template in:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <% if (title) { %>
    <h1><%= title %></h1>
  <% } %>
</body>
</html>
```
Render this EJS code if the user accesses the URL `/test-ejs` and render this page with `Hey` as value of `title` variable.

Remember that in `server.js`, you need to define the directory of your views and the name of the template engine you are using this way:
```
app.set('views', './views');
app.set('view engine', 'ejs');
```
Keep these lines before the routes for better organisation.

### Exercise 6 ([Help](https://ejs.co/))

We pass an array to our new page `/test-ejs2`:

`{users : ['Bob', 'John', 'Jane' ]}`

Create an EJS page that uses the `forEach` method to list each element.

### Exercise 7 ([Help](https://ejs.co/))

Create a template with two **input:text** fields to enter the first and last name and show it on the `/test-ejs3` route.

### Exercise 8 ([Help](https://github.com/expressjs/body-parser))

Submit the first and last name with the previous form to `/test-ejs3` _POST_ route.

Display in the console (terminal) the result of the _POST_ as a json with fields `name` and `surname`.

### Exercise 9 ([Help](http://expressjs.com/en/api.html#req.params))

Create a route of the type `/number/1`  where the number will be a variable `:id` and will be displayed on the page. E.g. on the route `/number/1337` we will see:

```
The number is 1337
```

### Exercise 10 ([Help](https://www.npmjs.com/package/nodemon))

If you are tired of always restarting the server, [nodemon](https://www.npmjs.com/package/nodemon) can come to the rescue.
Install it like this `npm i nodemon --save-dev` (this will also add a new entry under `devDependencies` in your `package.json`).
Change the `npm start` script in the `package.json` to be `nodemon server.js`.

Now restart the server; you server will automatically reload on file change.
To see the newest changes, you'll still have to reload the browser.

Nodemon is only for development use, that's why it's wise to add another entry to your package.json scripts: `"start-prod": "node server.js"`. This is the command you are going to run when you app is deployed on a remote host.

Your `scripts` entry in `package.json` should now look like this:

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon server.js",
  "start-prod": "node server.js"
}
```

