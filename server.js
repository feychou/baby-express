import colors from "colors";
import express from "express";
import bodyParser from 'body-parser';
import { URL } from 'url';

const PORT = 3000;
const server = express();
const publicDir = new URL('public', import.meta.url).pathname
const title = 'Hello there!'
const users = ['Bob', 'John', 'Jane' ]

server.use(bodyParser.urlencoded({ extended: false }))

server.set('views', './views');
server.set('view engine', 'ejs');
server.get('/', (req, res) => res.send('How are you?'))

server
  .route('/home')
  .get((req, res) => res.sendFile('homepage.html', { root: publicDir }))
  .put((req, res) => res.json({good: "yep"}))

server.get('/test', (req, res) => res.render('test', { title }))
server.get('/test2', (req, res) => res.render('test2', { title, users }))

server
  .route('/test3')
  .get((req, res) => res.render('test3', { title }))
  .post((req, res) => res.json(req.body))

server.get('/number/:id', (req, res) => res.send(`The number is ${req.params.id}`))

server.listen(PORT, () => console.log(`Started server on http://localhost:${PORT}`.rainbow))