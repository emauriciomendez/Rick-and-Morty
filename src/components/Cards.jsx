import React from 'react';
import Card from './Card';


export default function Cards(props) {
   const { characters } = props;
   return <div> <>{
    characters.map(elem => (
      <Card
         name={elem.name}
         species={elem.species}
         gender={elem.gender}
         image={elem.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
      />
    ))
   
            
    }  </>

   </div>;
}
