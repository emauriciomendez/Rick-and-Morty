import React from 'react';
import Card from './Card.jsx';


export default function Cards(props) {
   const { characters , onClose} = props;
   console.log(characters)
   return <div > <>{
    characters.map(elem => (
      <Card
         key={elem.name}
         id={elem.id}
         name={elem.name}
         species={elem.species}
         gender={elem.gender}
         image={elem.image}
         onClose={() => onClose(elem.id)}
      />
    ))
   
            
    }  </>

   </div>;
}
