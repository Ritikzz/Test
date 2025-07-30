// 'use client'
// import { useState } from "react"
// const Home=()=>{
//   // const res=await fetch("https://68874d64071f195ca980299f.mockapi.io/users");
//   // // console.log(res.ok);
//   // // console.log(res.status);
//   // if (!res.ok) {
//   //   return <p>This is Invalid Response</p>
//   // }
//   // const data=await res.json();
//   // console.log(data);

//     type user={
//     name:string,
//     id:string
//   }

//   const[data,setData]=useState<user>();

//   const handleClick=async()=>{
//      const res=await fetch("https://68874d64071f195ca980299f.mockapi.io/users",{
//         method:'POST',
//         headers:{'content-type':'application/json'},
//         body:JSON.stringify({Name:'Rajat kapoor',age:51,email:"rajat@hotmil.com"})
//      });
//         // console.log(res.ok);
//         // console.log(res.status);
//       if (!res.ok) {
//         return <p>This is Invalid Response</p>
//       }
      
//       console.log("Data has been saved");    

//       // const data=await res.json();
//       // console.log(data);
//       }
//   return(
//     <>
//       <h1>Home</h1>
//       <p>This is Home Component</p>
//       <input type="button" value="Save Data" onClick={handleClick} />
//       {/* {
//         data.map((row:User)=>{
//           return(
//             <div key={row.id}>
//               <hr />
//               {row.name} <br />
//               {row.age} <br />
//               {row.email} <br />
//             </div>
//           )
//         })
//       } */}
      
//     </>
//   )
// }

// export default Home; 


// ----------------------------------------------------------------------------------------------------------------------
'use client'
import React,{useState } from "react"
const Home=()=>{
    type user={
    name:string,
    age:number,
    email:string,
    id:string
  }

  const[data,setData]=useState<user>({name: '',age:0,email:'',id:''});
  const[saved,setSaved]=useState(false);
  const handleClick=async()=>{
     const res=await fetch("https://6888a202adf0e59551babe97.mockapi.io/Data",{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
     });
      if (!res.ok) {
        return <p>This is Invalid Response</p>
      }
      setData({name: '',age:0,email:'',id:''})
      setSaved(true)
      console.log("Data has been saved");    
  }
      const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]:e.target.value})
      }
  return(
    <>
      <h1>Home</h1>
      <p>This is Home Component</p>
      Name: <input type="text" name="name" value={data.name} onChange={handleChange} /> <br />
      Age: <input type="text" name="age" value={data.age} onChange={handleChange} /> <br />
      Email: <input type="text" name="email" value={data.email} onChange={handleChange} /> <br />
      <input type="button" value="Save Data" onClick={handleClick} />
      {saved && <p>Data has been Saved</p>}
      
    </>
  )
}

export default Home; 