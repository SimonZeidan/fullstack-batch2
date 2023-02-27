const shortener = require("../models/shortenerModel");


exports.shortenURL = async (req,res) =>{
    try{
        const longURL = req.body.loginURL;
        const URLcode = loginURL.substring(0,3) + 'SHORTURL';
        const shortURL = 'url.go/'+ URLcode; 


        /// then we must save the 3 variables in the database

       const newShortener = await shortener.create({
            longurl: longURL,
            urlcode: URLcode,
            shortURL: shortURL
        })

        return res.status(201).json({message: "Shortener Created", data: shortURL });
    }catch (err){
        return res.status(400).json({message: "Error Occured in replacing"});
    }
}