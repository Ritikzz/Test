'use client';
import React,{ useState } from "react";
const Home=()=>{ 
    
    const[city,setCity]=useState("");
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        //setCity(e.target.value);
        setCity(e.currentTarget.value);
    }
    const handleClick=(e:React.MouseEvent<HTMLInputElement>)=>{
        console.log(city);
        console.log(e.currentTarget.value);
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

                Enter city : <input type="text" value={city} onChange={handleChange} /> <br />
                <input type="button" value="Click me" onClick={handleClick} />
            </p>
        </>
    );
}
export default Home;