'use client'
import React,{ useContext } from "react";
import { useData } from "../_component/DataProvider";
import { useRouter } from "next/navigation";
const Show=()=>{
    const{state,dispatch}=useData();
    if (state.length==0) {
        return <p> There is no record present</p>
    }
    const router=useRouter();
    return(
        <>
            <h1>This is Show Component</h1>
            {
                state.map((row,i)=>{
                    return(
                        <div key={i}>
                            <hr />
                            {row.name} <br />
                            {row.age} <br />
                            {row.email} <br />
                            <input type="button" value="Delete" onClick={()=>dispatch({type:"del",payload:i})}  />
                            <input type="button" value="Edit" onClick={()=>router.push(`/edit/${i}`)} />
                        </div>
                    )
                })
            }
        </>
    )
}


export default Show;