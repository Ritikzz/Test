// 'use client'
// import { useReducer,useContext,createContext } from "react";

// type user={
//     name:string;
//     age:number;
//     email:string
// }

// type ActionType={type:"add",payload:user}

// // type Records={
// //     users:user[]
// // }

// type ContextType={
//     state:user[];
//     dispatch:React.Dispatch<ActionType>
// }

// const is:user[]=[]

// const reducer=(state:user[],action:ActionType):user[]=>{
//     switch (action.type) {
//         case "add": return [...state,action.payload];
//         default: return state;
//     }
// }

// const DataContext=createContext({} as ContextType);

// export const useData=()=>{
//     return useContext(DataContext);
// }

// const DataProvider=({children}:{children:React.ReactNode})=>{
//     const[state,dispatch]=useReducer(reducer,is);
//     return(
//         <DataContext value={{state,dispatch}}>
//             {children}
//         </DataContext>
//     );
// }
// export default DataProvider;

// -----------------------------------------------------------------------------------------------------------------------
// 'use client';
// import React,{useReducer,useContext,createContext} from 'react';


// type Student={    
//     name:string;
//     age:number;
//     email:string;
// };

// type Records={
//     Students:Student[]
// };

// type ActionType={type:'add',payload:Student} | {type:'reset'} | {type:'del',payload:number};



// type ContextType={
//     state:Records;
//     dispatch:React.Dispatch<ActionType>
// };


// const is:Records={
//                     Students:[
//                               /*  {name:'nitin',age:21,email:'nitin@yahoo.com'},
//                                 {name:'kunal',age:22,email:'kn@hotmail.com'}  */
//                             ]
//                  };

// const reducer=(state:Records,action:ActionType):Records=>{
//     switch(action.type)
//     {   
//         case "add" :    const rcds=[...state.Students];
//                         rcds.push(action.payload);                       
//                         return {Students:rcds};    
//         case "del" :    const arr=[...state.Students];
//                         arr.splice(action.payload,1);
//                         return {Students:arr};
//         case "reset" : return is;
//         default : return state;
//     }
// }




// const DataContext=createContext({} as ContextType);

// export const useData=()=>{
//     return useContext(DataContext);
// }

// const DataProvider=({children}:{children:React.ReactNode})=>{
//     const[state,dispatch]=useReducer(reducer,is);
//     return(
//         <DataContext value={{state,dispatch}}>
//             {children}
//         </DataContext>
//     );
// }
// export default DataProvider;

// ---------------------------------------------------------------------------------------------------------------
// 'use client'

// import { useReducer,createContext,useContext } from "react";

// type user={
//     name:string;
//     age:number;
//     email:string
// }
// type ActionType={type:"add",payload:user}|{type:"del",payload:number}

// type ContextType={
//     state:user[];
//     dispatch:React.Dispatch<ActionType>
// }

// const is:user[]=[];   //const is:{name:string,age:number,email:string}[]=[];
// const reducer=(state:user[],action:ActionType):user[]=>{
//     switch (action.type) {
//         case "add": return [...state,action.payload]
//         case "del": return state.filter((_,i)=> i !==action.payload)
//         default: return state;
//     }
    
// }

// const DataContext=createContext({} as ContextType);
// export const useData=()=>{return useContext(DataContext)};

// const DataProvider=({children}:{children:React.ReactNode})=>{
//     const[state,dispatch]=useReducer(reducer,is)
//     return(
//         <DataContext value={{state,dispatch}}>
//             {children}
//         </DataContext>
//     )
// }   

// export default DataProvider;
// --------------------------------------------------------------------------------------------------------
// 'use client'
// import React,{ useReducer,createContext,useContext } from "react";


// const is:{name:string,age:number,email:string}[]=[];
// console.log(is);
// const reducer=(state:{name:string,age:number,email:string}[],
//                 action:{type:"add",payload:{name:string,age:number,email:string}}
//                     |  {type:"update",payload:{index:number,updata:{name:string,age:number,email:string}}}
//                     |  {type:"del",payload:number}
// ):{name:string,age:number,email:string}[]=>{

//     switch (action.type) {
//         case "add": return[...state,action.payload]
//         case "del" : return state.filter((_,i)=> i!==action.payload)
//         case "update": return [state[action.payload.index]=action.payload.updata]
//         default: return state;
//     }

// }

// type ContextType={
//     state: { name: string; age: number; email: string }[];
//     dispatch: React.Dispatch<
//     | { type: 'add'; payload: { name: string; age: number; email: string } }
//     | { type: 'update'; payload: {index:number,updata:{name: string; age: number; email: string }} }
//     | { type: 'del'; payload: number }
//   >;
// }

// const DataContext=createContext({} as ContextType)
// export const useData=()=>{return useContext(DataContext)}

// const DataProvider=({children}:{children:React.ReactNode})=>{
//     const[state,dispatch]=useReducer(reducer,is)
//     // console.log(state);
//     return(
//         <DataContext value={{state,dispatch}}>
//             {children}
//         </DataContext>
//     )
// }

// export default DataProvider;

// ---------------------------------------------------------------------------------------------------------

'use client'
import React,{ useState,createContext,useContext, useReducer } from "react";

type user={
    name:string;
    age:number;
    email:string
}

type ActionType={type:"add",payload:user}|{type:"del",payload:number} |{type:"edit",payload:{index:number,update:user}}

type Records={
    val:user[]
}

const is:Records={
    val:[]
}

const reducer=(state:Records,action:ActionType):Records=>{
    switch (action.type) {
        // case "add": const us=[...state.val]
        //             us.push(action.payload)
        //             return {val:us}
        case "add": return{val:[...state.val,action.payload]}
        case "del": return {val:state.val.filter((_,i)=> i!= action.payload)} //state.val joki ek array hai,or usme bahot saare object store hai,usme se i vale index ko filter out krdo 
        // case "edit": return {val:[state.val[action.payload.index]=action.payload.update]}
        case "edit": {
        return {val:state.val.map((row,i)=>{
            if (i==action.payload.index) {
                return action.payload.update
            }else{
                return row
            }
        })}
    }
        default: return state;
    }
}


type ContextType={
    state:Records;
    dispatch:React.Dispatch<ActionType>
}
const DataContext=createContext({} as ContextType);
export const useData=()=>{return useContext(DataContext)}

const DataProvider=({children}:{children:React.ReactNode})=>{
    const[state,dispatch]=useReducer(reducer,is)
    // console.log(state);
    return(
        <DataContext value={{state,dispatch}}>
            {children}
        </DataContext>
    )
}

export default DataProvider;
