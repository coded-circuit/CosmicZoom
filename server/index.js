const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8001;
const CLIENT_ORIGIN = 'http://localhost:3000';



//Parse JSON and form bodies through Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//CORS Operation- always before routes
const corsOperation ={
    origin: CLIENT_ORIGIN,
    methods: ['GET','POST' ,'PATCH','DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'], //Access-control-allowed-origin
}
app.use(cors(corsOperation));
//handling preflight requests
app.use((req,res,next)=>{
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Origin', CLIENT_ORIGIN);
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.status(204).send(); 
    }
    next();
})

//Routes
app.get('/',(req,res)=>{
    res.send('Hello World');
})



app.listen(PORT,()=>{
    console.log('Server is running on port :',PORT);
})