import React, { useState } from "react";

export default function FormOne() {


    const [name,setname] =  useState("")
    const [age,setage] =  useState(0)
    const [email,setemail] =  useState("")



    const handlename = (e) =>{
        setname(e.target.value)   
    }


    const handleage = (e)=>{
        setage(e.target.value)
    }


    const hanelemail = (e) =>{
        setemail(e.target.value)
    }


  return (
    <div>
      <h1>New FORM </h1>

      <label>Name</label>
      <input  onChange={handlename} placeholder="Name" />

      <br />
      <br />

      <label>Age</label>
      <input onChange={handleage} placeholder="Age"  />

      <br />
      <br />

      <label>Email</label>
      <input onChange={hanelemail} placeholder="Email" />


      <br />
      <br />
      <button>Submit</button>


      <h2>Name - {name}</h2>
      <h2>age - {age}</h2>

      <h2>email - {email}</h2>

    </div>
  );
}
