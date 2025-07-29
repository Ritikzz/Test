import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "description related to About goes here",
};
const About=()=>{
    console.log("From About before return");
    return(
        <>
            <h2>About</h2>
            <p>
                About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. 
                <br /> <br />
                About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. About related stuff goes here. 
            </p>
        </>
    );
}
export default About;