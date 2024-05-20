const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoutes = require('./routes/product.route')

const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({exteded: false}));

//routes
app.use('/api/products', productRoutes);

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})

app.get('/', (req, res)=>{
    res.send('hello from node API server')
})

mongoose.connect("mongodb+srv://host:F%40rd2001@crud-api.hvb9poj.mongodb.net/?retryWrites=true&w=majority&appName=crud-api")
.then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log(err.stack)
});