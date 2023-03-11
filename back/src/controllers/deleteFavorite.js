// let  favs  = require('../utils/favs');

// // const deleteFavorite = (req, res) => {
// //     const { id } = req.params;
// //     try {
// //         if(id){
// //             const characterFiltered = favs.findIndex(charac => charac.id === Number(id));
// //             if(characterFiltered.length !== favs.length){
// //                 favs = characterFiltered;
// //                 res.status(200).json({success: true})
// //             }
// //         }
// //     } catch (error) {
// //         res.status(500).json({message: error.message})
// //     }
// const deleteFavorite = (req, res) => {
//     const {id} = req.params;
//     console.log(id)
//     if(id){
//         let charIndex = favs.findIndex(charac => charac.id === Number(id));
//         favs.splice(charIndex,1)
//            console.log(favs)
//            return res.status(200).json(favs)
//     }
//    return res.status(400).send("no hay nada")   
// }

// module.exports = deleteFavorite;
const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;

        const favoriteDeleted = await Favorite.findByPk(id);
        if(!favoriteDeleted) return res.status(404).json({message: `There is not character with id ${id}`})

        favoriteDeleted.destroy();
        return res.status(200).json({message: 'Favorite deleted successfully'});
        
    } catch (error) {
        return res.status(404).json({message: error.message}) 
    }
}

module.exports = deleteFav;