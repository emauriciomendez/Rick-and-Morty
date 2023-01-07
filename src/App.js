/* eslint-disable no-unused-expressions */
import React from 'react';
import './App.css'
import About from './components/About.jsx'
import Cards from './components/Cards.jsx'
import Detail from './components/Detail.jsx'
import Nav from './components/Nav.jsx'
//import characters from './data.js' //, { Rick }
//import {useState} from 'react'
import { Route, Routes } from 'react-router-dom';

function App () {

  const [characters,setCharacters]= React.useState([]);
  function onSearch(cardABuscar){
    //console.log('llego card a buscar '+ cardABuscar);
            fetch(`https://rickandmortyapi.com/api/character/${cardABuscar}`)
              .then((response) => response.json())
              .then((data) => {
               const existe= characters.filter(card=> card.id===data.id)
                
                  if(existe.length===0){              
                       if (data.name) {
                            setCharacters((oldChars) => [...oldChars, data]);
                          } else {
                            window.alert('No hay personajes con ese ID.');
                        }}  else{
                          alert('El personaje ya existe. No se puede adicionar.')
                        }  
              });
       }

    function onClose(id){
      //alert('se presiona on close. '+id);
      setCharacters( (oldCards)=> oldCards.filter( (cardd)=> cardd.id !== id))
    }

  return (
    <div className='App' >
      <div>
        <Nav onSearch={onSearch} />
        
      </div>
      
      <Routes> 
        <Route path='/home' element={<Cards  characters={characters} onClose={onClose}/> }  />        
        <Route path='/about' element={<About/> }  />
        <Route path='/detail/:id' element={<Detail/> }  />
      </Routes>
    </div>
  )
}

export default App
