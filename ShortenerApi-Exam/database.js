const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async() =>{
    try{
        const params = 
            { useUnifiedTopology: true,useNewUrlParser: true }
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.DB_URL,params );
    }catch (err){
        // process.exit(1);
        console.log(err);

    }
}

module.exports = connectDB;