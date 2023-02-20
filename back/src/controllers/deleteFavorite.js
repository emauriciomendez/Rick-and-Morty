const  favs  = require('../utils/favs');

const deleteFavorite = (req, res) => {
    const { id } = req.params;
    if(id){
        const characterFiltered = favs.filter(charac => charac.id !== Number(id));
        if(characterFiltered.length !== favs.length){
            favs = characterFiltered;
            res.status(200).json({success: true})
        }
    }
}

module.exports = deleteFavorite;