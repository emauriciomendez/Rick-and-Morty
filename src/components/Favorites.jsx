import React from "react"
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
import Card from './Card.jsx'
import st from '../components/estilos/Favorites.module.css'

 function Favorites({myFavorites}){
  const navigate= useNavigate(); 
  function backToHome(){ navigate ("/home")   }
return<div>
   <div><h2 className={st.titulo}>Favoritos</h2> </div>
   <div><button className={st.btn} onClick={backToHome}>Home</button></div>
   {myFavorites.map(elem => (
   <Card
         key={elem.name}
         id={elem.id}
         name={elem.name}
         species={elem.species}
         gender={elem.gender}
         image={elem.image}
        // onClose={() => onClose(elem.id)}
      />
   )
    
   )}
  
</div>

}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)