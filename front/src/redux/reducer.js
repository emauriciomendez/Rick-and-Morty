/* eslint-disable array-callback-return */
import {ADD_FAVORITES,DELETE_FAVORITE,FILTER,ORDER,GET_FAVORITE} from './actions.js'


const initialState={
     myFavorites:[],
    allCharacters: []};

export function reducer(state=initialState,actions){
    switch (actions.type){
        case ADD_FAVORITES:
                return{
                    ...state,
                    myFavorites: [...state.myFavorites, actions.payload],
                    allCharacters: [...state.myFavorites, actions.payload],
                    // myFavorites: actions.payload,
                    // allCharacters:  actions.payload
                    //[...state.allCharacters, actions.payload]
                }
                  

                
        case   DELETE_FAVORITE:
                return{
                    ...state,
                    myFavorites: state.myFavorites.filter((char) => char.id !== actions.payload)
                }
        case   FILTER:
           // console.log(state.allCharacters )
            const filteredChar= state.allCharacters.filter((char) => char.gender === actions.payload)
                return{
                    ...state,
                    //allCharacters: state.allCharacters.filter((char) => char.gender !== actions.payload),
                    myFavorites:[...filteredChar] //filteredChar
                }
       case  ORDER:
                     const orderChar =state.allCharacters.sort((a,b)=>{
                            if(actions.payload==="Ascendente"){
                                if(a.id < b.id)  return -1
                                if(a.id > b.id)  return 1;    
                                return 0;                     
                            }else{
                                if(a.id < b.id)  return 1
                                if(a.id > b.id)  return -1;    
                                return 0;                   
                            }
                    })
                    return{
                        ...state,
                        myFavorites: [...orderChar]
                    }
        case GET_FAVORITE:
            return{
                ...state,
                allCharacters: actions.payload,
                myFavorites: actions.payload
            }      
              
       
        default :   return {...state }
    }

}