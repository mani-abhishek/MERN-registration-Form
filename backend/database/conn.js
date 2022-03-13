const mongoose = require('mongoose');
require('dotenv').config();



mongoose.connect(process.env.MONGODB_URL, {
    
}).then(() => {
    console.log("Conncection is succesful");
}).catch((err) => {
    console.log(`No connection : ${err}}`);
});
