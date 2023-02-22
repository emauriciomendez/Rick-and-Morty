let  favs  = require('../utils/favs');

const deleteFavorite = (req, res) => {
    const { id } = req.params;
    try {
        if(id){
            const characterFiltered = favs.filter(charac => charac.id !== Number(id));
            if(characterFiltered.length !== favs.length){
                favs = characterFiltered;
                res.status(200).json({success: true})
            }
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

module.exports = deleteFavorite;