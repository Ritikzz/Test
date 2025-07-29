"use client"
const input=()=>{
    const handleClick=()=>{
      console.log("Clicked");
    }

  return(
    <>
      <div className="inp">
          Name: <input type="text" /> <br />
          Age : <input type="number" /> <br />
          Email : <input type="text" /> <br />
          <input type="button" value="Save Data" onClick={handleClick}/>
      </div>
    </>
  )
}

export default input;