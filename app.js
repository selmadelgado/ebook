// Public key: pk_test_drOZ8fjels9TRp9id5EdnO0Y
// Secret key: sk_test_bZW5BqNybsg5V1bHDoij1xyz

const express = require('express');
const stripe = require('stripe')('sk_test_bZW5BqNybsg5V1bHDoij1xyz');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

/*
// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get('/', (req, res) => {
    res.render('index');
});

*/