const express = require('express');
const { router } = require('../routes/index');
const cors = require('cors')
const PORT = 3001;

const server = express();

server.use(express.json());
server.use(cors());

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Autorizo recibir solicitudes de este dominio
   res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
   next();
});

server.use('/', router);

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});

module.exports = { server };

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<promises>>>>>>>>>>>>>>>>>>>>>>>><
//const http = require("http");

// const data = require("../utils/data.js");

// http.createServer(function(req, res){
//     // 
//       // res.setHeader('Access-Control-Allow-Origin', '*');
//       // res.writeHead(200, {"Content-Type": "text/plain"});
//       // res.end('prueba server 4'+req.url);
//       // console.log (req.url);
     
//       if(req.url.includes('rickandmorty/character')){
//         let id = req.url.split("/").at(-1); //"id"
//         console.log(id)
//         let character = data.find(char => char.id === Number(id));

//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify(character))
//      }
// }
//).listen(3001, "localhost");

// rickandmorty/character/id () => {
   // console.log("server levantado")

// ["rickandmorty", "character", "id"]