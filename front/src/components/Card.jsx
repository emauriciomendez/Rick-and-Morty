import React from "react";
import c from './estilos/Card.module.css'
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorite } from "../redux/actions";
import { connect } from "react-redux";


 function Card({id,name,species,gender,image,onClose,myFavorites, addFavorites,deleteFavorite}) {
  
const [isFav,setIsFav]=React.useState(false)
  React.useEffect(() => {
  // myFavorites.length>0 && 
  //addFavorites({1})
   myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [myFavorites]);

   const handleFavorite=()=>{
      if(isFav){
         setIsFav(false);
         deleteFavorite(id)
      }else{
         setIsFav(true);
         addFavorites({id,name,species,gender,image})
      }
   }
   return (
     
         
      <div className={c.divCard}>
         {isFav ? (
         <button className={c.classFavorite} onClick={handleFavorite}>❤️</button> ) : 
         ( <button className={c.classFavorite} onClick={handleFavorite}>🤍</button> )}
         
         <button className={c.classBtn} onClick={onClose}>X</button>   
         <img  src={image} alt= {name}  className={c.classImg}/>    
         <Link to={`/detail/${id}`} >
            <div>      
               <h2 className={c.className}>{name}</h2>
               <h2 className={c.classH2}>Especie: {species}</h2>
               <h2 className={c.classH2}>Genero: {gender}</h2>
            </div> 
         </Link>
      </div>
     
   );
} 
export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
     addFavorites: function (character) {
       dispatch(addFavorites(character))
     },
     removeFavorites: function (id) {
       dispatch(deleteFavorite(id))
     }
   };
 };
/*const mapDispatchToProps=(dispatch)=>{
   return{
      addFavorites: function(char){ dispatch(addFavorites(char))};
      deleteFavorite: function(char){ dispatch(deleteFavorite(char))};
      
   }

}*/
export default connect(mapStateToProps,mapDispatchToProps)(Card);