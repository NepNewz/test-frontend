import React from 'react'
import axios from "axios"

const Edit = () => {

  const handleSubmit  =async(e)=>{
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/api/edit",
      { headers: { Authorization: "Bearer" + localStorage.getItem("token")}}
    );
    console.log(response)
    
    

  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        click
        <input className=' border-red-100 border-2' type="submit" value="ok" />
      </form>
    </div>
  )
}

export default Edit