import {ADD_FAVORITES,DELETE_FAVORITE} from './actions.js'


const initialState={ myFavorites:[]}

export function reducer(state=initialState,actions){
    switch (actions.type){
        case ADD_FAVORITES:
                return{
                    ...state,
                    myFavorites:[...state.myFavorites, actions.payload]
                }
                  

                
        case   DELETE_FAVORITE:
                return{
                    ...state,
                    favorites: state.myFavorites.filter((char) => char.id !== actions.payload)
                }
       
        default :   return state 
    }

}