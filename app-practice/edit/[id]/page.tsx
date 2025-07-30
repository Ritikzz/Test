'use client'
import React,{ use, useState } from "react"
import { useData } from "../../_component/DataProvider"

const Edit=({params}:{params:Promise<{id:number}>})=>{
    console.log(params.id);
    const{id}=React.use(params);
    console.log(id);
    const {state,dispatch}=useData();
    const[update,setUpdate]=useState({name:"",age:0,email:""})



    return(
        <>
            <h1>This is Edit Component</h1>
        </>
    )






}

export default Edit;