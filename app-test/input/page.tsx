// 'use client'
// import React,{ useState } from "react";
// import { useData } from "../_component/DataProvider";
// const Input=()=>{
//     const[data,setData]=useState<{ name: string; age: number; email: string; }>({name:"",age:0,email:""})
//     const{state,dispatch}=useData();
//     const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//         setData({...data,[e.target.name]:e.target.value})
//     }

//     const handleClick=()=>{
//         dispatch({type:"add",payload:data})
//         setData({name:"",age:0,email:""})
//         console.log(data);
//     }

//     // console.log(state);


//     return(
//         <>
//             <h1>This is Input Component</h1>
//             Name : <input type="text" name="name" value={data.name} onChange={handleChange} /> <br />
//             Age : <input type="number" name="age" value={data.age} onChange={handleChange} /> <br />
//             Email : <input type="text" name="email" value={data.email} onChange={handleChange} /> <br />

//             <input type="button" value="Save Data" onClick={handleClick} />
//         </>
//     )
// }

// export default Input;
// ---------------------------------------------------------------------------------------------------------------------------
// 'use client'
// import React,{ useState } from "react";
// import { useData } from "../_component/DataProvider";
// const Input=()=>{
//     const[data,setData]=useState({name:"",age:0,email:""})
//     const{state,dispatch}=useData();

//     const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//         setData({...data,[e.target.name]:e.target.value})
//     }
//     const handleClick=()=>{
//         dispatch({type:"add",payload:data})
//         setData({name:"",age:0,email:""})
//         // console.log(data);
//     }


//     return( 
//         <>
//             <h1>This is Input Component</h1>
//             Name : <input type="text" name="name" value={data.name} onChange={handleChange}/> <br /> 
//             Age : <input type="text" name="age" value={data.age}  onChange={handleChange}/> <br />
//             Email : <input type="text" name="email" value={data.email}  onChange={handleChange}/> <br />
            
//             <input type="button" value="Save Data" onClick={handleClick}/>
//         </>
//     )
// }

// export default Input;


// ---------------------------------------------------------------------------------------------------------------------

'use client'
import React,{ useState } from "react";
import { useData } from "../_component/DataProvider";
const Input=()=>{
    const[data,setData]=useState({name:"",age:0,email:""})

    const {state,dispatch}=useData();

    const handleChange=(e:React.ChangeEvent<HTMLInputElement> )=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleClick=()=>{
        dispatch({type:"add",payload:data})
        setData({name:"",age:0,email:""})
        console.log(data);
    }
    return(
        <>
            <h1>This is Input Conponent</h1>
            Name: <input type="text" name="name" value={data.name} onChange={handleChange}  /> <br />
            Age: <input type="number" name="age" value={data.age} onChange={handleChange}  /> <br />
            Email: <input type="text" name="email" value={data.email} onChange={handleChange}  /> <br />

            <input type="button" value="Save Data" onClick={handleClick} />
        </>
    )
}


export default Input;