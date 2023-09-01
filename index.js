// call express js and express global handlebars and setup directory paths
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

// required to initialize a varible for express js calls
const app = express();

// use server port or if local use my made up port 5000
const PORT = process.env.PORT || 5000;

const mystuff = "my stuff";

// set handlebar dynamic pages and global headers under views folder
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// set handlebar routes to serve homepage from views folder defined above
app.get('/', (req, res) => {
    res.render('home', {stuff: mystuff});
});

// set public folder to host any static webpages
app.use(express.static('public'))

// listen for port and throw output
app.listen(PORT, () => console.log('Server Listening on port ' + PORT));
