const  favs  = require('../utils/favs');

const postFavorite = (req, res) => {
    const { character } = req.body;
    try {
        if(character){
            favs.push(character);
            return res.status(200).json(character)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
   
}

module.exports =  postFavorite ;