import React, { useState } from "react";

function NameShow() {
  const [name, setname] = useState("Arunachalam");

  const [age, setage] = useState(25);

  const handlename = () => {


    if (name == "Arunachalam") {
      setname("Arun");
      setage(26);
    } else {
      setname("Arunachalam");
      setage(25);
    }


  };

  return (
    <>
      <h1>name : {name}</h1>

      <button onClick={handlename}>change </button>

      <h2>age : {age}</h2>
    </>
  );
}

export default NameShow;

// hooks = 10 +
// inbuilt function givren react
// use start
// usestate
// useState gives acces to state in function comp
