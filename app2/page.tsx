'use client';
import { useRouter } from "next/navigation";
const Home=()=>{
    const router=useRouter();
    const handleClick=()=>{
        router.push("/contact");
    }
    console.log("From Home before return");
    return(
        <>
            <h2 className="text-3xl bg-sky-800 text-white w-max p-1">Home</h2>
            <p className="mt-5">
                Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. 
                Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. 
                <br /><br />
                Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. Some text goes here for Home. 
            </p>
            <p>
                <input type="button" value="Go to Contact" onClick={handleClick} 
                        className="border-1 border-solid bg-green-500 text-white p-2" />
            </p>
        </>
    );
}
export default Home;