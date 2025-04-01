import React from 'react'
const buttonStyle={
    backgroundColor:"blue",
    color:"white",
    fontSize:"25px",
    border:"none",
    padding:"15px",
    width:"500px",
    
    

}

function Header() {

  return (
    <div>
<button style={buttonStyle}>  Home</button>
<button style={buttonStyle}>About Us</button>
<button style={buttonStyle}>contact Us</button>
    </div>

  )
}

export default Header
