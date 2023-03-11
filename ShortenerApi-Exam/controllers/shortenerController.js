const shortener = require("../models/shortenerModel");
const shortid = require("shortid");

exports.shortenURL = async (req,res) =>{
    const longURL = req.body.longURL;
    try{
        let url = await shortener.findOne({longurl: longURL});
        if(!url){
            const URLcode = shortid.generate({length: 6});
            const shortURL = `${req.protocol}://${req.get('host')}/url/${URLcode}`; 
        /// then we must save the 3 variables in the database
            url = new shortener({
                longurl: longURL,
                urlcode: URLcode,
                shorturl: shortURL
            });
            await url.save();
        }

        return res.json({shortUrl: url.shorturl });
    }catch (err){
        return res.status(500).json({message: "Error Occured in replacing"});
    }
}

exports.redirectUrl = async (req,res) => {
   const urlCode = req.params.urlCode;
   console.log(urlCode);
   try {
    const shorturl = await shortener.findOne({urlcode: urlCode});
    if(!shorturl){
        return res.status(404).json({message: "Url not found"});
    }
    res.redirect(shorturl.longurl);
   }catch (err){
    res.status(500).json({message: "Internal Server Error"});
   }
}