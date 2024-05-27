const express = require('express')
require('dotenv').config()
const router = require('./routes/Routes')
const mongoose = require('mongoose')
const app = express()


app.use(express.json())
app.use( (req,res,next) => {
    console.log(req.method)
    next()
})
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_STRING );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process on error
    }
}

app.use('/milestones', router)

app.get('/', (req,res) => {
    
    res.send("Hello there")
})
 

connectDb()
.then(() => {
    
    app.listen(process.env.PORT ,() => {
        console.log('Server is running')
    })
    
})
.catch(error => {
    console.error('Server startup error:', error);
    process.exit(1); // Exit process on error
});
