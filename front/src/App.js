/* eslint-disable no-unused-expressions */
import React from 'react';
import './App.css';
import About from './components/About.jsx';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail.jsx';
import Nav from './components/Nav.jsx';
import Form from './components/Form/Form';
import Error from './components/Error.jsx';
import Favorites from './components/Favorites.jsx';
//import characters from './data.js' //, { Rick }
//import {useState} from 'react'
import { Route, Routes , useLocation, useNavigate} from 'react-router-dom';


function App () {

  const [characters,setCharacters]= React.useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = React.useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';
  const location=useLocation()

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }else{
    alert('usuario o contraseña incorrectas')
   }
}
const logout=()=>{
  navigate('/');
  setCharacters([]);
}
React.useEffect(() => {
  !access && navigate('/');
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [access]);
  
  function onSearch(cardABuscar){
    //console.log('llego card a buscar '+ cardABuscar);
            fetch(`http://localhost:3001/rickandmorty/character/${cardABuscar}`)
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
       {location.pathname !=='/'&&  <Nav onSearch={onSearch} logout={logout} />   }     
      </div>      
      <Routes> 
        <Route exact path='/' element={<Form login={login}/>}/>        
        <Route path='/home' element={<Cards  characters={characters} onClose={onClose}/> }  />        
        <Route path='/about' element={<About/> }  />
        <Route path='/detail/:id' element={<Detail/> }  />
        <Route path='/favorites' element={<Favorites/> }  />
        <Route path='*' element={<Error />}  />
      </Routes>
      
      
    </div>
  )
}

export default App
