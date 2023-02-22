import axios from 'axios'

export const ADD_FAVORITES='ADD_FAVORITES'
export const DELETE_FAVORITE='DELETE_FAVORITE'
export const   FILTER='FILTER'
export const   ORDER='ORDER'
export const   GET_FAVORITE='GET_FAVORITE'

export const addFavorites=(charac)=>{
   return async function(dispatch){
      try {
         const result= await axios.post(`http://localhost:3001/rickandmorty/fav`,charac);      
         return dispatch({
               type: ADD_FAVORITES,
               payload: result.data
            });     
      } catch (error) {
         console.log(error);
      }
     
   };
   
};
export const deleteFavorite=(id)=>{
   return async function(dispatch){
      try {
         const result= await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
         const dataDeleted=result.data
         return dispatch( {
               type: DELETE_FAVORITE,
               payload: {id,
                  dataDeleted}
             })
      } catch (error) {
         console.log(error);
      }         
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

 export const getFavorite= (id)=>{
   return async function(dispatch){
      try {
         const result= await axios.get(`http://localhost:3001/rickandmorty/fav`)  
          return dispatch( {
            type: GET_FAVORITE,
            payload: result.data
          })
      } catch (error) {
         
      }
     
   }
}