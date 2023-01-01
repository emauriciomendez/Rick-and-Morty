import React, { useState } from "react";
import s from './estilos/SearchBar.module.css';

export default function SearchBar({onSearch}) {
         const [cardABuscar,setCardABuscar]=useState('')

         function cambiosInput(e) {
            e.preventDefault();
            setCardABuscar(e.target.value)
            console.log(cardABuscar);
         }

         function enviarInput(e) {
            e.preventDefault();
            console.log(cardABuscar);
            onSearch(cardABuscar);
         }
   return (<form onSubmit={e=>{
                  e.preventDefault();
                  enviarInput(e)
               }} >
               <div>
                  <input   className={s.inp} 
                           type='search' 
                           onChange={(e)=>cambiosInput(e)}/>
                  <input   type='submit'   
                           value='agregar' 
                           className={s.boton} />
                 {/* <button className={s.boton} onClick={()=>enviarInput()}>Agregar</button> */}
               </div>
            </form>
            );
            }
