'use client'
import React,{ useReducer,useContext,createContext } from "react";

type stu={
    roll:number;
    name:string
}

type ActionType={type:"update",payload:stu} | {type:"reset"}

type ContextType={
    state:stu;
    dispatch:React.Dispatch<ActionType>
};

const is:stu={roll:1,name:"Fein"}
const reducer=(state:stu,action:ActionType):stu=>{
    switch (action.type) {
        case "update": return action.payload;
        case "reset": return is;
        default: return state;
    }
    
}

export const DataContext=createContext({} as ContextType);

// export const useData=()=>{
//     return useContext(DataContext);
// }

const DataProvider=({children}:{children:React.ReactNode})=>{              //DataProvider in Layout 
    const[state,dispatch]=useReducer(reducer,is);
    return(
        <DataContext value={{state,dispatch}}>
            {children}
        </DataContext>
    )
}

export default DataProvider;