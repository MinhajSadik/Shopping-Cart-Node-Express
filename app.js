const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');
// init app
const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');
// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// // connect to database
// mongoose.connect('./config/database');
// const db = mongoose.connection;
// db.once('open', () => {
//   // we're connected!
//   console.log('Connected Database');
// });

const uri = "mongodb+srv://MinhajSadik:MongoDB1@cluster0.4y50m.mongodb.net/shoppingCart?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser: true,  useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
  // we're connected!
  console.log('Database Connected');
}).catch(() => {
  console.log('connection faild');
});




app.get('/', (req, res)=> {
    res.send('working')
})

//start the server
const port = 3000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
})