
const axios = require("axios");
const url = 'https://rickandmortyapi.com/api/character/';

const getCharById = async(req, res) => {
    const { id } = req.params;
        try {        
        const getCharFromApi = await axios(`${url}${id}`)     
        const characterApi  =  getCharFromApi.data
            let character = {
                id: characterApi.id,
                image: characterApi.image,
                name: characterApi.name,
                gender: characterApi.gender,
                species: characterApi.species
            }
            res.status(200).json(character);
        
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = getCharById;
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const getCharById = (req, res) => {
//     const { id } = req.params;
    
//     try {

        
//         axios(`${url}${id}`)
//         .then(info => info.data)
//         .then(data => {
//             let character = {
//                 id: data.id,
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species
//             }
//             res.status(200).json(character);
//         })
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// }

// module.exports = getCharById;

//>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<

//async function
// const axios = require("axios");

// const getCharById= (res, id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(info=>info.data)
//         .then(data=>{ 
//             let character={
//                 id:data.id,
//                 image: data.image,
//                 name: data.name ,
//                 gender: data.gender,
//                 species: data.species
//                 }
//             res.writeHead(200, {'Content-Type':'application/json'});
//             res.end(JSON.stringify(character));
//             }        
//         )
//         .catch(err=>{
//             res.writeHead(500,{'Content-Type':'text/plain'});
//             res.end(console.log(err.message));

//             })


//         }
// module.exports= {getCharById};