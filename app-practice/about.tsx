'use client';
// import { useData } from "./_component/DataProvider";
import { useContext } from "react";
import { DataContext } from "./_component/DataProvider";

const About=()=>{
    const{state,dispatch}=useContext(DataContext);
    return(
        <>
            <h1>This is About Component</h1>
            Roll No. : {state.roll} <br />
            Name     : {state.name} <br />

            <input type="button" value="Update from Home" onClick={()=>dispatch({type:"update",payload:{roll:3,name:"About"}})} />
            <input type="button" value="Reset" onClick={()=>dispatch({type:"reset"})} />
        </>
    )
}

export default About;