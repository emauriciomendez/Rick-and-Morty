import React from "react";
import c from './estilos/Card.module.css'
import { Link } from "react-router-dom";

export default function Card({id,name,species,gender,image,onClose}) {
   return (
      <Link to={`/detail/${id}`} >
         
      <div className={c.divCard}>
          <h2 className={c.className}>{name}</h2>
         <button className={c.classBtn} onClick={onClose}>X</button>   
         <img  src={image} alt= {name}  className={c.classImg}/>    
        <div>
         <h2 className={c.classH2}>Especie: {species}</h2>
         <h2 className={c.classH2}>Genero: {gender}</h2>
         </div>
      </div>
      </Link>
   );
}
// <img  src={()=>(console.log('sin imagen'))} alt= ""/> 
// 