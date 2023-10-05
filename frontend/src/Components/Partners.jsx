import React from 'react'
import partner from "../assets/partner.jpeg"

const Partners = () => {
  return (
    <div style={{marginLeft:"200px",marginRight:"200px",display:"flex",justifyContent:"space-between"}}>
        
        <div>
            <h1  style={{display:"flex",justifyContent:"center"}}> 
                our Partner's
            </h1>
            <img src={partner} alt="s"  height={"800px"} width={"1180px"} />

        </div>
    </div>
  )
}

export default Partners