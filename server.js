const express=require('express')
const app = express();
const dotenv=require('dotenv')
const morgan=require('morgan');
const routes= require('./app/routes/Routes')
const session=require('express-session')
const bodyParser = require("body-parser");

dotenv.config();

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', './app/views');
app.set('view engine', 'ejs');


if (process.env.NODE_ENV==='development') {
    app.use(morgan('dev'))
    console.log('the app is in development phase')

} else if (process.env.NODE_ENV==='production') {

    app.use(compress());
    console.log('the app is in production phase ')
}

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));



//static file access point
app.use(express.static('public/css'));
app.use(express.urlencoded({extended:true}))

app.use(routes)


app.listen(process.env.PORT , ()=>{

    console.log(`The app is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT }`)

})