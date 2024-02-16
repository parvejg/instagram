import {  createContext, useReducer } from "react";
export const AppContext  = createContext();

 const reducerFunction =(state,action)=>{
   switch (action.type) {
      case "LikeData":
         return{
            ...state,
            likeData: action.payload,
         }
         case "DislikeData":
            return{
               ...state,
               DislikeData: action.payload
            }
      default: 
      return state;
   }
 }
 const initialState = {
    likeData: [],
    DislikeData: []
    
 }

 export  const ContextProvider =({children})=>{
    const [state, dispatch] = useReducer(reducerFunction,initialState)
    return <AppContext.Provider  value = {{state, dispatch}}>{children}</AppContext.Provider>
    
 }
 export const useAppContext = ()=>{
   return  createContext(AppContext);
 } 