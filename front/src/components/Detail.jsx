import React from "react";
import { useParams, useNavigate} from "react-router-dom";
import st from './estilos/Detail.module.css';

export default function Detail(){
    const { id } = useParams();
   // console.log(id+' iiiii')
    const navigate = useNavigate();
   const [character, setCharacter] = React.useState({});  

   React.useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
          .then((response) => response.json())
          .then((char) => {
           // console.log(char)
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID ");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID " );
          });
        return setCharacter({});
      }, [id]);

 function backToHome(){ navigate ("/home")   }
      return(
        <div className={st.container} >
          <div>

          <h1>{character.name}</h1>
          <div className={st.datos}>
            
            <h3>Estatus: {character.status}</h3>
            <h3>Especie: {character.species}</h3>
            <h3>Genero: {character.gender}</h3>
            <h4>Origen: {character.origin?.name}</h4> 
            
            </div>
            <button onClick={backToHome} className={st.boton}> Volver</button>
            </div>    

          <img src={character.image} alt={character.name} className={st.imagen} /> 
      
        </div>

       
      )
}