const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors') // to enable the cross origin flow of the data.
require('dotenv/config');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Middlewares => These are nothing but the functions when some particular url is being hit by the user, can be used for auth and stuffs.
// import routes
const postRoute = require('./routes/posts');
app.use('/posts', postRoute); // Using middleware to run the postRoute




// Routes
app.get('/', (req, res) => {
    res.send('We are on the home!')
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => { 
});



// listen to the server
app.listen(process.env.PORT || 3000);