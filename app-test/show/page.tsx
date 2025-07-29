// 'use client';
// import { useData } from "../_component/DataProvider";
// const Show=()=>{
//     const{state,dispatch}=useData();   

//     if(state.length==0)
//     {
//         return (
//             <>
//                 <h2>Show</h2>
//                 <p>
//                     There is no record
//                 </p>
//             </>
//         );
//     }
//     return(
//         <>
//             <h2>Show</h2>
//             {
//                 state.map((row,i)=>{return(
//                     <div key={i} className="box">
//                         <h3>{row.name}</h3>
//                         <p>
//                             {row.age}<br />
//                             {row.email}
//                         </p>
//                         <p>
//                             <input type="button" value="X" 
//                                 onClick={()=>dispatch({type:'del',payload:i})} />
//                         </p>
//                         <hr />
//                     </div>
//                 )})
//             }                  
//         </>
//     );
// }
// export default Show;
// --------------------------------------------------------------------------------------
// 'use client'
// import { useRouter } from "next/navigation";
// import { useData } from "../_component/DataProvider";

// const Show=()=>{
//     const{state,dispatch}=useData();
//     const router=useRouter();

//     if (state.length==0) {
//         return<p> Their is no record</p>
//     }
//     return(
//         <>
//             <h1>This is Show Component</h1>
//             {
//                 state.map((row,i)=>{return(
//                     <div key={i}>
//                         <hr />
//                         <h3>{row.name}</h3>
//                         <p>{row.age}</p>
//                         <p>{row.email}</p>
//                         <input type="button" value="X" onClick={()=>dispatch({type:"del",payload:i})} />
//                         <input type="button" value="edit" onClick={()=>router.push(`/edit/${i}`)} />
//                     </div>
//                 )})
//             }
//         </>
//     )
// }

// export default Show;


'use client'
import React,{ useData } from "../_component/DataProvider";
import { useRouter } from "next/navigation";
const Show=()=>{
    const {state,dispatch}=useData();

    const router=useRouter();
    
    if (state.val.length<=0) {
        return <p>There is no records right now</p>
    }
    return(
        <>
            <h1>This is Show Component</h1>
            {
                state.val.map((row,i)=>{return(
                    <div key={i}>
                        <hr />
                        <h2>{row.name}</h2>
                        <p>{row.age}</p>
                        <p>{row.email}</p>
                        <input type="button" value="X" onClick={()=>dispatch({type:"del",payload:i})} />
                        <input type="button" value="edit" onClick={()=>router.push(`/edit/${i}`)} />
                    </div>
                )})
            }
        </>
    )
}

export default Show;
