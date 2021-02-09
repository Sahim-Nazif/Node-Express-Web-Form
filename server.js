const express=require('express')
const app = express();
const dotenv=require('dotenv')


const PORT= process.env.PORT ||3000;

dotenv.config();

if (process.env.NODE_ENV==='development') {
    app.use(morgan('dev'))
    console.log('the app is in development phase')

} else if (process.env.NODE_ENV==='production') {

    app.use(compress());
    console.log('the app is in production phase ')
}


app.listen(PORT, ()=>{

    console.log(`The app is running in ${process.env.NODE_ENV} mode on port ${PORT}`)

})