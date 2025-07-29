'use client';
const Contact=()=>{

    const handleClick=()=>{
        console.log("From handle click");
    }

    console.log("From Contact before return");
    return(
        <>
            <h2>Contact</h2>
            <p>
                User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. 
                <br /> <br />
                User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. User can submit form  over here to contact with the team. 
            </p>
            <p>
                <input type="button" value="Click me" onClick={handleClick} />
            </p>
        </>
    );
}
export default Contact;