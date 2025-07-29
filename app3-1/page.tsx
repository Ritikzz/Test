'use client';
import { useState } from "react";
const Home=()=>{ 
    
    const[city,setCity]=useState("");
    const handleClick=()=>{
       
    }
    console.log("From Home before return");
    return(
        <>
            <h2>Home</h2>
            <p>
                Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. 
                Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. 
                <br /><br />
                Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. 
            </p>            
            <p>

                Enter city : <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} /> <br />
                {city}
            </p>
        </>
    );
}
export default Home;