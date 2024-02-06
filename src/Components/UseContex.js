import { createContext, useReducer } from "react";

 const reducerFunction =(action, state)=>{
    switch (action) {
        case "likeData":
return {
    ...state,
    likeData: action.payload
}    
        default:
            return state;
    }
 }
 const initialState = {
    likeData: []
 }
export const context  = createContext()

 export const ContexProvider =({children})=>{
    const [state, dispatch] = useReducer(reducerFunction,initialState)
    return <context.Provider  value = {{state, dispatch}}>{children}</context.Provider>
    
 }