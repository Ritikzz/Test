'use client';
import React,{useReducer,useContext,createContext} from 'react';


type Student={
    roll:number;
    name:string
};


type ActionType={type:'update',payload:Student} | {type:'reset'};



type ContextType={
    state:Student;
    dispatch:React.Dispatch<ActionType>
};


const is:Student={roll:1001,name:'amit kapoor'};
const reducer=(state:Student,action:ActionType):Student=>{
    switch(action.type)
    {
        case "update" : return action.payload;
        case "reset" : return is;
        default : return state;
    }
}




const DataContext=createContext({} as ContextType);

export const useData=()=>{
    return useContext(DataContext);
}

const DataProvider=({children}:{children:React.ReactNode})=>{
    const[state,dispatch]=useReducer(reducer,is);
    return(
        <DataContext value={{state,dispatch}}>
            {children}
        </DataContext>
    );
}
export default DataProvider;