// 'use client'
// import React,{ useReducer,useContext,createContext } from "react";

// type stu={
//     roll:number;
//     name:string
// }

// type ActionType={type:"update",payload:stu} | {type:"reset"}

// type ContextType={
//     state:stu;
//     dispatch:React.Dispatch<ActionType>
// };

// const is:stu={roll:1,name:"Fein"}
// const reducer=(state:stu,action:ActionType):stu=>{
//     switch (action.type) {
//         case "update": return action.payload;
//         case "reset": return is;
//         default: return state;
//     }
    
// }

// export const DataContext=createContext({} as ContextType);

// // export const useData=()=>{
// //     return useContext(DataContext);
// // }

// const DataProvider=({children}:{children:React.ReactNode})=>{              //DataProvider in Layout 
//     const[state,dispatch]=useReducer(reducer,is);
//     return(
//         <DataContext value={{state,dispatch}}>
//             {children}
//         </DataContext>
//     )
// }

// export default DataProvider;

// ----------------------------------------------------------------------------------------------
'use client'
import React,{ useReducer,createContext,useContext } from "react"

type student={
    name:string,
    age:number,
    email:string
}
type ActionType={type:"add",payload:student}|{type:"del",payload:number}|{type:"edit",payload:student}

type ContextType={
    state:student[],
    dispatch:React.Dispatch<ActionType>
}


const is:student[]=[];

const reducer=(state:student[],action:ActionType):student[]=>{
    switch (action.type) {
        case "add": return [...state,action.payload]
        case "del": return state.filter((_,i)=>{
            return i!==action.payload
        })
        // case "edit": 
        default:return state;
    }
}



const DataContext=createContext({} as ContextType);
export const useData=()=>{return useContext(DataContext)}

const DataProvider=({children}:{children:React.ReactNode})=>{
    const[state,dispatch]=useReducer(reducer,is);
    // console.log(state);
    return(
        <DataContext value={{state,dispatch}}>
            {children}
        </DataContext>
    )
}
export default DataProvider;