

export const ADD_FAVORITES='ADD_FAVORITES'
export const DELETE_FAVORITE='DELETE_FAVORITE'
export const   FILTER='FILTER'
export const   ORDER='ORDER'

export const addFavorites=(char)=>{
   return{
            type: ADD_FAVORITES,
            payload: char
   } 
}
export const deleteFavorite=(id)=>{
   return{
            type: DELETE_FAVORITE,
            payload: id
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