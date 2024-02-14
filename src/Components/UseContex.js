import {  createContext, useReducer } from "react";
export const AppContext  = createContext();

 const reducerFunction =(action, state)=>{
   switch (action.type) {
      case "likeData":
         return{
            ...state,
            likeData: action.payload,
         }
      default: 
      return state;
   }
 }
 const initialState = {
    likeData: []
    
 }

 export  const ContextProvider =({children})=>{
    const [state, dispatch] = useReducer(reducerFunction,initialState)
    return <AppContext.Provider  value = {{state, dispatch}}>{children}</AppContext.Provider>
    
 }
 export const useAppContext = ()=>{
   return  createContext(AppContext);
 } 