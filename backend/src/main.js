const express = require('express');



require('../database/conn');
require('dotenv').config();
require('../database/models/user');


const userDetails = require("../database/models/user");

const router = express();
router.use(express.json());


// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
// router.all('*', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     next();
// });


router.get("",(req,res)  =>{
    res.send("Welcome to my world")
})


router.post('/register',async (req,res) => {
    try {
        const user = await new userDetails(req.body);
        const username = await userDetails.findOne({username:user.username});
        const email = await userDetails.findOne({email:user.email});
        const phone = await userDetails.findOne({phone:user.phone});
        
        if (email && phone) {
            res.status(401).send({message:"Both Email and Phone exist"});
            console.log("email or phone exist!");
        }
        else if (email) {
            res.status(401).send({message:"Email Id Already Exist!"});
            console.log("email exist");
        }
        else if (phone) {
            res.status(401).send({message:"Phone Number alreay exist"});
            console.log("phone exist");
        } 
        else if (username) {
            res.status(401).send({message:"Usernae already taken!"});
            console.log("change user name");
        }
        else{
            user.save().then(() => {
                res.status(201).send({message:"Data saved in database"});
                console.log("DATA SAVED");
            }).catch((err) => {
                res.status(401).send(err);
            });
        }
        
    } catch (error) {
        res.status(401).send(error);
    }
    
})







router.listen(process.env.PORT , ()  => {
    console.log(`Listeniing on port number ${process.env.PORT}`);
} )