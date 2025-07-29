'use client';
import { useData } from "./_components/DataProvider";
const Home=()=>{ 
    const{state,dispatch}=useData();
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

                Roll : {state.roll} <br />
                Name : {state.name} <br />
                <input type="button" value="Udpate from Home" 
                    onClick={()=>dispatch({type:'update',payload:{roll:9090,name:'kunal'}})} />
            </p>
        </>
    );
}
export default Home;