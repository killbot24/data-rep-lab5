const express = require('express')
const app = express()
const port = 3000 //Port it listens to
const path= require('path');
const bodyParser= require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get('/', (req, res) => {//Home page called sends this message
  res.send('Welcome to DataRepresentation & Querying')//Sends message
})

app.get('/hello/:name', (req, res) => {//Listens on /hello responds with printing hello name (name being the last parms)
    console.log(req.params.name);
    res.send('Hello '+req.params.name);
    })

app.get('/api/movies',(req, res)=> { //Listens on this
    const mymovies= [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }];
        
        
res.json({movies:mymovies})//Sends info above
})

app.get('/test', (req, res) => {//Listens on /test
    res.sendFile(__dirname + '/index.html');//sends file
    })

app.get('/name', (req, res) => {//Listens on /name
    res.send('Hello '+req.query.fname+ ' '+ req.query.lname);//transfers via url
    })
app.post('/name', (req, res) => {//Listens on /name
    res.send('Hello '+req.body.fname+ ' '+ req.body.lname);//transfers by body
})

app.listen(port, () => {//Sets up listen
  console.log(`Example app listening at http://localhost:${port}`)
})

