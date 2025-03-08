const express = require("express"); //initialize the express application step 2

const mongoose = require("mongoose") // imported mongoose for interacting with MongoDB STEP 5

// CORS middleware to allow cross-origin requests
const cors = require("cors");

// load environment variable and configure it
require("dotenv").config();

const app = express(); // INITIALIZE THE EXPRESS APPLICATION STEP 2

const port = process.env.PORT; // set port at 3000

// Allow request from any origin
app.use(cors({origin: "*" }));

// step 11
// import  routes handles
const goalRoutes = require("./routes/goalRoutes.js")

// step 9 middleware to parse incoming JSON requests...you can now test with POSTMAN
app.use(express.json())

// step 12 // define the routes 
app.use("/api/goals", goalRoutes);


// CONNECT TO MONGODB AND START APP SERVER  step6
const start = async () => {
await mongoose.connect(process.env.MONGO_URI)

console.log("MongoDB Connected Successfully")


    // start the express server and listen on the specific port step 4

app.listen(port, () =>{
    console.log(`Server is runing on port ${port}`)
})

}

start()
// brdonlineservices
// RNlU9pS61Y7ZuY3f
// mongodb+srv://brdonlineservices:RNlU9pS61Y7ZuY3f@cluster0.lnwma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// 3 important folders for the backend
// model folder: the model is to give your database a blueprint of the data structure which will be an "object"

// 2. CONTROLLER FOLDER :THE CONTROLLER HANDLES THE REQUEST AND RESPONSE OF EACH FUNCTION....REQUEST TYPES: GET, POST, DELETE, PATCH, PUT...
// RESPONSES: (STATUS CODE) 200 GOOD, 404. PAGE NOT FOUND, 201, 500 INTERNAL SERVER ERROR.

// 3. ROUTES FOLDER: ROUTES DEFINES THE PATH WAYS FOR EACH FUNCTION COMING FROM THE CONTROLLER 

// MONGODB: IS THE DATABASE WE WILL BE USING
// 
