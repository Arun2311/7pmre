import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Grocerry() {
  const [data, setdata] = useState([]);
  const [inputdata, setinputdata] = useState("");

  const handleinput = (e) => {
    setinputdata(e.target.value);
  };

  const handlepost = async () => {
    let body = {
      grocery: inputdata,
    };

    await axios.post("http://localhost:3000/todoList", body);

    handlefetch();
  };




  const handlefetch = async () => {
    let res = await axios.get("http://localhost:3000/todoList");
    setdata(res.data);
  };


  const handledelete = async (id) =>{

    await axios.delete(`http://localhost:3000/todoList/${id}`); 
    handlefetch();

  }


  const handleedit = async(i) =>{

    let newname =  prompt("enter new data" , data[i].grocery)

    let body = {
      id : data[i].id,
      grocery: newname,
    };
    await axios.put(`http://localhost:3000/todoList/${data[i].id}`, body);
    handlefetch();


  }

  useEffect(() => {
    handlefetch();
  }, []);

  return (
    <div>
      <h1>Grocerry List</h1>
      <input onChange={handleinput} placeholder="Pls enter groccery" />
      <button onClick={handlepost}>Submit</button>

      {data.map((names,i) => (
        <div>
          <h1>{names.grocery}</h1>
          <button  onClick={()=>handleedit(i)} >Edit</button>
          <button onClick={()=>handledelete(names.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
