/* eslint-disable no-unused-expressions */
import React from 'react';
import './App.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
/*import SearchBar from './components/SearchBar.jsx'*/
import Nav from './components/Nav.jsx'
import characters from './data.js' //, { Rick }
//import {useState} from 'react'

function App () {//

  
 // const actualizar=()=>setCharacters18('hola2');
 //const example = {
 // name: 'Morty Smith',
 // species: 'Human',
 // gender: 'Male',
 // image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
  const [characters18,setCharacters18]= React.useState([]);
  function onSearch(cardABuscar){
    console.log('llego card a buscar '+ cardABuscar);

      fetch(`https://rickandmortyapi.com/api/character/${cardABuscar}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters18((oldChars) => [...oldChars, data]);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
   
    // const example1 = {
    //  name: 'Morty Smith',
    //  species: 'Human',
    //  gender: 'Male',
    //  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    // };
    //characters18.push(example1);
   // setCharacters18((allCards)=>[ ...allCards, example1]);
    }
    function onClose(id){
      //alert('se presiona on close. '+id);
      setCharacters18( (oldCards)=> oldCards.filter( (cardd)=> cardd.id !== id))
    }
 //const function onSearch(){setCharacters18(example);
 //onSearch();
//console.log('anonima')}
//hh();
  return (
    <div className='App' style={{ padding: '25px', backgroundColor: 'gray' }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      {/*<div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
  </div>*/}
      <hr />
      <div>
      
       {/*} <Cards
          characters={characters} onClose={onClose}
/>*/}
      </div>
      <hr />
      <div>
       
      <Cards
        characters={characters18} onClose={onClose}
        />
      
                    
      </div>
    </div>
  )
}

export default App
