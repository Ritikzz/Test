// 'use client'
// import React,{ useState } from "react";
// import { useData } from "../../_component/DataProvider";
// const Edit=({params}:{params:Promise<{id:number}>})=>{

//     const{id}=React.use(params);

//     const[data,setData]=useState({name:"",age:0,email:""})
//     const{state,dispatch}=useData();

//     const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//         setData({...data,[e.target.name]:e.target.value})
//     }
//     const handleUpdate=()=>{
//         dispatch({type:"update",payload:{index:id,updata:data}})
//         setData({name:"",age:0,email:""})
//         // console.log(data);
//     }


//     return( 
//         <>
//             <h1>This is Edit Component</h1>
//             Name : <input type="text" name="name" value={data.name} onChange={handleChange}/> <br /> 
//             Age : <input type="text" name="age" value={data.age}  onChange={handleChange}/> <br />
//             Email : <input type="text" name="email" value={data.email}  onChange={handleChange}/> <br />
            
//             <input type="button" value="Save Data" onClick={handleUpdate}/>
//         </>
//     )
// }

// export default Edit;
'use client'

import React,{ useState } from "react"
import { useData } from "../../_component/DataProvider"

const Edit=({params}:{params:Promise<{id:number}>})=>{
    
    const{id}=React.use(params) 
    const{state,dispatch} =useData();
    const[up,setUp]= useState({name:"",age:0,email:""})

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUp({...up,[e.target.name]:e.target.value})
    }

    const handleUp=()=>{
        dispatch({type:"edit",payload:{index:id,update:up}})
        setUp({name:"",age:0,email:""})
    }

    // console.log(up);
    return(
        <>
            <h1>This is Edit Component</h1>
            Name: <input type="text" name="name" value={up.name}  onChange={handleChange}/> <br />
            Age: <input type="text" name="age" value={up.age}  onChange={handleChange}/> <br />
            Email: <input type="text" name="email" value={up.email}  onChange={handleChange}/> <br />

            <input type="button" value="Update Data" onClick={handleUp} />
        </>
    )
}

export default Edit;
