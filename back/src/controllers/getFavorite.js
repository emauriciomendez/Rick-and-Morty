const  favs  = require('../utils/favs');

const getFavorite = (req, res) => {
    res.status(200).json(favs)
}

module.exports =  getFavorite 