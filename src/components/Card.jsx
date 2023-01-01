import React from "react";
import c from './estilos/Card.module.css'

export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className={c.divCard}>
         <button className={c.classBtn} onClick={onClose}>X</button>   
         <img  src={image} alt= {name}  className={c.classImg}/>    
         <h2 className={c.className}>{name}</h2>
         <h2 className={c.classH2}>{species}</h2>
         <h2 className={c.classH2}>{gender}</h2>
        
      </div>
   );
}
// <img  src={()=>(console.log('sin imagen'))} alt= ""/> 
// 