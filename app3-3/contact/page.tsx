'use client';
import { useData } from "../_components/DataProvider";
const Contact=()=>{
    const{state,dispatch}=useData();
    return(
        <>
            <h2>Contact</h2>
            <p>
                User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. 
                <br /> <br />
                User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. 
            </p>   
             <p>

                Roll : {state.roll} <br />
                Name : {state.name} <br />
                <input type="button" value="Udpate from Contact" 
                    onClick={()=>dispatch({type:'update',payload:{roll:9999,name:'amit khanna'}})} />

                <input type="button" value="Reset from Contact" 
                    onClick={()=>dispatch({type:'reset'})} />

            </p>        
        </>
    );
}
export default Contact;