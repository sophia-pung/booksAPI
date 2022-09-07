import express from 'express';
import cors from 'cors';
//import routes from './routes/books.js'
import bodyParser from 'body-parser';
import path from 'path'; // need to know
// import { v4 as uuidv4} from "uuid";
import BOOKS from './books.js'

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use('/api/books' , routes)

const __dirname = path.resolve();
app.use(express.static('client'));

//get, put, update something- build a list of books in front end- make a get request
//make a request to get specific information

//homepage get message, default get endpoint should be pulling
app.get('/', (req, res) => {
    res.send('Hello World, from express');
    // open index.html file that is in client directory
    res.sendFile(path.join(__dirname, 'client', 'index.html'))
})

app.get("/api/books", (req, res) => {
  res.json(BOOKS);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

const router = express.Router();
//defining new variable
let masterBookList = BOOKS;

// //creates an endpoint for the route `/api/books` that prints all the books 

//router.get('/', (req, res)=> {
//console.log(masterBookList)
//res.json(masterBookList)
//})

/*
router.get('/:isbn', (req, res)=> {
    const isbn = req.params.isbn;
    let newBook
    for (let i = 0; i < masterBookList.length; i++) {
        let newBook = masterBookList[i]
        if (newBook.isbn === isbn) {
            res.json(masterBookList[i]);
            return
        }
    }
    res.sendStatus(404)
    })

router.delete('/:isbn', (req, res) => {

    //lines of codes when request is made to endpoint delete
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Remove item from the books array
    masterBookList = masterBookList.filter(i => i.isbn !== isbn) 
    res.send('Book is deleted');

});


// Creating new record of book 
router.post('/' , (req, res)=> {
    const book = req.body;

    // Output the book to the console for debugging
    
    masterBookList.push(book);
    console.log(masterBookList);
    res.send('Book is added to the database')

})

router.post('/:isbn', (req, res) => {

    // Reading isbn from the URL
    const isbn = req.params.isbn;
    console.log(isbn)
    const newBook = req.body;
    console.log(newBook)

    for (let i = 0; i < masterBookList.length; i++) {
        let book = masterBookList[i]
        if (book.isbn === isbn) {
            masterBookList[i] = newBook;
            res.send('Book with' + isbn + ' is edited');
            return
        }
    }
    res.send('Book with' + isbn + ' Not FOUND!!!!');
})

export default router
*/

/*
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import books from './books.js';
//import pretty from 'express-prettify';

//framework that handles routes and endpoints. create an instance of express web server. 
const app = express();
const PORT = 8000;

// to let the server know what directory are we working on 
const __dirname = path.resolve();

// Configuring cors middleware, plug in, for express
app.use(cors());

// Configuring express-prettify middleware for working with JSON
//app.use(pretty({ query: 'pretty' }));

// Configuring body parser middleware, more plug ins
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// to render static files from the client folder, whatever is inside client, render normally as plain files
app.use(express.static('client'));
//index html as is, not as something else

// //creates an endpoint for the route `/api/books` that prints all the books 
app.get("/api/books", (req, res) => {
    res.json(books);
  });

//creates a route `/` that is the homepage
app.get('/', (req, res) =>{
  //testing that was working
  //res.send("Hello Techtonica, welcome to Cristina's Library");
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
  //this send the response to open the index.html in that directory
}); 

app.post('/', (req, res) =>{
    //testing that was working
    //res.send("Hello Techtonica, welcome to Cristina's Library");
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
    //this send the response to open the index.html in that directory
  }); 

app.put('/', (req, res) =>{
    //testing that was working
    //res.send("Hello Techtonica, welcome to Cristina's Library");
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
    //this send the response to open the index.html in that directory
  }); 

app.delete('/api/books/:isbn', (req, res) =>{ //route parameters > makes the :isbn a variable
    //testing that was working
    //res.send("Hello Techtonica, welcome to Cristina's Library");
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
    //this send the response to open the index.html in that directory
  }); 


//starting the process, use this specific port, and listen for incoming requests
app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));
*/

//REST> representational API (send requests in JSON, either in get/post/delete/put)
//getting data back in JSON
//API that lets you manage books, front end lets you manage books
//create, read, update

//query data and select > return table of data, what normally happens, the middleware is where the commands are executed
//route it the last part of the URL in the app > converted to JSON > sent back to react > turn into table, list, or graph
//press a button and makes another query and updates graoh, 
//internal API and external API (express is internal API)
//JSON to wire to express which is on our server (wire as in the internet- can lose packets)
//JSON is a format that REACT understands
//access by a route> /2 or /edit, that is sent over to express, express says you are trying to edit the entry
//In express, write the route that triggers sequel query, write that query to express, express then sends the command to postgres server
//postgres server converts it to JSON in express and sent back to react
//API keys in env file, get keys in express, don't want to expose them in express
//ex: 2000 express per month, press F12 see console/app requests from API, everytime requests something, you can see API key

//express is the one that calls the API by using that key
//express server makes API request with API key
//user can't see API key, express server is sending the data back

//build API and server
//internal API are express files in your project (not stored in client directory, showed up on wherever you're hosting the server)
//server is like a computer, where you're running the computer locally. or computer that you pay for somewhere else. 
//CDN, make multiple copies of server contents in multiple locations, access a cache or copy of it in multiple locations. would be really slow to get to your server, ex: copy in India. 
//one server is down, goes to the next one. 

//at work, modyfing existing code, understand scope you're working on. 

//do pair assignment with everyone else. remember what you failed to learn and revisit it. try again when you have time. try your best to understand the concepts. 
//get the code to work, but get it to work. 
//understand the concept, try to write the code, code fails. 
// day to day- understand why its not working. 
//hey I'm working on this, does anyone want to join. reocurring timeslot. 
//make keywords, and update questions, and make flashcards. 

//don't know how long things are going to take. 
//do estimations. how hard or how long. 
//figure out what part makes it hard, break it apart, and find the people who know how to do it. 

//remember how you got to the point you got stuck in. how to read error messages. 
//error at this path and line number. 