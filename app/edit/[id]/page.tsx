'use client'
import React,{useState } from "react"
const Edit=({params}:{params:Promise<{id:number}>})=>{
    const{id}=React.use(params) 
    type user={
    name:string,
    age:number,
    email:string,
    id:string
  }

  const[data,setData]=useState<user>({name: '',age:0,email:'',id:''});
  const[saved,setSaved]=useState(false);
  const handleUpdate=async()=>{
     const res=await fetch(`https://6888a202adf0e59551babe97.mockapi.io/Data/${id}`,{
        method:'PUT',
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
      <h1>Edit</h1>
      <p>This is Edit Component</p>
      {/* <input type="text" name="name" value={data.name} onChange={handleChange} /> <br /> */}
      Name: <input type="text" name="name" value={data.name} onChange={handleChange} /> <br />
      Age: <input type="text" name="age" value={data.age} onChange={handleChange} /> <br />
      Email: <input type="text" name="email" value={data.email} onChange={handleChange} /> <br />
      <input type="button" value="Update Data" onClick={handleUpdate} />
      {saved && <p>Data has been Updated</p>}
      
    </>
  )
}

export default Edit; 