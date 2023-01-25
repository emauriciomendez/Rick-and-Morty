import React from "react"
import {useNavigate} from 'react-router-dom'
import {connect, useDispatch} from 'react-redux'
import Card from './Card.jsx'
import st from '../components/estilos/Favorites.module.css'
import {orderCards, filterCards } from '../redux/actions.js'
 export function Favorites({myFavorites}){
        const navigate= useNavigate(); 
        function backToHome(){ navigate ("/home")   }
        const dispatch=useDispatch();
        function handleOrder(e){
           dispatch(orderCards(e.target.value))
        }
        function handleFilter(e){
         // console.log(e.target.value)
          dispatch(filterCards(e.target.value))
       }

      return<div>
        <div><h2 className={st.titulo}>Favoritos</h2> </div>
        <div><button className={st.btn} onClick={backToHome}>Home</button></div>
        <div> <select name ='order' onChange={handleOrder}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
              </select>
              <select name='filter' onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
              </select>
          </div>

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