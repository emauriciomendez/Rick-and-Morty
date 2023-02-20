import axios from 'axios'

export const ADD_FAVORITES='ADD_FAVORITES'
export const DELETE_FAVORITE='DELETE_FAVORITE'
export const   FILTER='FILTER'
export const   ORDER='ORDER'

export const addFavorites=(charac)=>{
   return function(dispatch){
      axios(`http://localhost:3001/rickandmorty/fav`,charac)
      .then(info=>info.data)
      .then(data=>{
         dispatch(
            {
               type: ADD_FAVORITES,
               payload: data
      } 
         )

      })
   }
   
}
export const deleteFavorite=(id)=>{
   return function(dispatch){
      axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      .then(info=>info.data)
      .then(data=>{
         dispatch( {
               type: DELETE_FAVORITE,
               payload: id
             })
      })
   }   
}
   
 export const filterCards= (status)=>{
      return{
         type: FILTER,
         payload: status
      }
 }
 export const orderCards= (id)=>{
      return{
         type: ORDER,
         payload: id
      }
 }