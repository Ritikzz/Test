// 'use client'
// import { useEffect, useState } from "react";

//   type user={
//     name:string,
//     id:string
//   }
// const Show=()=>{
//     const[records,setRecords]=useState<user[]>([]);
//     const[loading,setLoading]=useState(true);
//     useEffect(()=>{
//         const getData=async()=>{    
//             const res=await fetch("https://6888a202adf0e59551babe97.mockapi.io/Data")
//             if (res.ok) {
//                  const data=await res.json();
//                  setLoading(false)
//                  setRecords(data)
//                 //  console.log(data); 

//             }
//         }  
//         getData();
//     },[])

//     const handleDelete=async(e:string)=>{
//         console.log(e);
//         const res=await fetch(`https://6888a202adf0e59551babe97.mockapi.io/Data/${e}`,{
//             method:"DELETE"
//         })
//         if(res.ok){

//             setRecords(records.filter(row=>{return row.id!==e}))
//         }
//     }
//     // console.log(records)
//     return(
//         <>
//             <h1>This is Show Component</h1>
//             {loading&& <p>Loading...</p>}
//             { !loading && records.map((row:user)=>{
//                     return(
//                         <div key={row.id}>
//                             <hr />
//                             {row.name} <br />
//                             <input type="button" value="Delete" onClick={()=>handleDelete(row.id)} />
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }


// export default Show;
// -----------------------------------------------------------------------------------------------------------------------
'use client'
import React,{ useEffect, useState } from "react";
import { useRouter } from "next/navigation";

  type user={
    name:string,
    id:string
  }
const Show=()=>{
    const[records,setRecords]=useState<user[]>([]);
    const[loading,setLoading]=useState(true);
    const router=useRouter();

    useEffect(()=>{
        const getData=async()=>{    
            const res=await fetch("https://6888a202adf0e59551babe97.mockapi.io/Data")
            if (res.ok) {
                 const data=await res.json();
                 setLoading(false)
                 setRecords(data)
                //  console.log(data); 

            }
        }  
        getData();
    },[])
    //----------------DELETE BUTTON--------------------------------------------------------------
    const handleDelete=async(e:string)=>{
        console.log(e);
        const res=await fetch(`https://6888a202adf0e59551babe97.mockapi.io/Data/${e}`,{
            method:"DELETE"
        })
        if(res.ok){

            setRecords(records.filter(row=>{return row.id!==e}))
        }
    }
    //----------------EDIT BUTTON--------------------------------------------------------------
    const handleEdit=(id:string)=>{
        router.push(`/edit/${id}`)
    }

    
    // console.log(records)
    return(
        <>
            <h1>This is Show Component</h1>
            {loading&& <p>Loading...</p>}
            { !loading && records.map((row:user)=>{
                    return(
                        <div key={row.id}>
                            <hr />
                            {row.name} <br />
                            <input type="button" value="Delete" onClick={()=>handleDelete(row.id)} />
                            <input type="button" value="Edit" onClick={()=>handleEdit(row.id)} />
                        </div>
                    )
                })
            }
        </>
    )
}
export default Show;