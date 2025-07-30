// 'use client';
// import { useReducer } from "react";

// const reducer=(state:{count:number},action:{type:string}):{count:number}=>{
//     switch (action.type) {
//         case "Increment": return {count:state.count+1}
//         case "Decrement": return {count:state.count-1}
//         case "reset": return {count:0}
//         default: return state;
//     }
// }
// const Home=()=>{
//     const[state,dispatch]=useReducer(reducer,{count:0})

//     console.log("Before Return");
//     return(
//         <>
//             <h1>This is Home Component</h1>
//             count :{state.count} <br />
//             <input type="button" value="Increment" onClick={()=>dispatch({type:"Increment"})} />
//             <input type="button" value="Dercrement" onClick={()=>dispatch({type:"Decrement"})} />
//             <input type="button" value="Reset" onClick={()=>dispatch({type:"reset"})} />
//         </>
//     )
// }

// export default Home;
// ---------------------------------------------------------------------------------------
// 'use client';
// import { useData } from "./_component/DataProvider";
// import { useContext } from "react";
// import { DataContext } from "./_component/DataProvider";

// import About from "./about";
// const Home=()=>{
//     const{state,dispatch}=useContext(DataContext);
//     return(
//         <>
//             <h1>This is Home Component</h1>
//             Roll No. : {state.roll} <br />
//             Name     : {state.name} <br />

//             <input type="button" value="Update from Home" onClick={()=>dispatch({type:"update",payload:{roll:2,name:"Ritik"}})} />
//             <input type="button" value="Reset" onClick={()=>dispatch({type:"reset"})} />

//             <About />
//         </>
//     )
// }

// export default Home;

'use client'
import React,{ useState,useContext } from "react";
import { useData } from "./_component/DataProvider";
const Home=()=>{

    const[data,setData]=useState({name:"",age:0,email:""})

    const{state,dispatch}=useData();
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleClick=()=>{
        // console.log(data);
        dispatch({type:"add",payload:data})
        setData({name:"",age:0,email:""})
    }
    
    return(
        <>
            <h1>This is Home Component</h1>
            Name: <input type="text" name="name" value={data.name} onChange={handleChange}/> <br />
            Age: <input type="number" name="age" value={data.age} onChange={handleChange}/> <br />
            Email: <input type="text" name="email" value={data.email} onChange={handleChange}/> <br />
            <input type="button" value="Save Data" onClick={handleClick}/>
        </>
    )
}

export default Home;
