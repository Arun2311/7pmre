import React, { useEffect, useState } from "react";

export default function ApiCallWithBtn() {
  const [productdata, setproductdata] = useState([]);

  const [count, setcount] = useState(0);


  const handlefetch = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setproductdata(data);
  };



  useEffect(()=>{
    // mounting
    handlefetch()
console.log("arn");




return ()=>{
  console.log("clear");
  
}

    // updating -[]
  },[count])

 

  const handlecount = () =>{
    setcount(count + 1)
  }




  return (
    <div>
      <h1 onClick={handlecount}>Product -{count}</h1>



      {productdata.map((datas) => (
        <div>
            
            <img src={datas.image}  height={200} width={200}/> 
            <h1>{datas.title}</h1>
            <h3>RS {datas.price}</h3>
            </div>
      ))}


      {/* life cycle */}

{/* mounting ,  updating ,unmounting */}

      {/* <button onClick={handlefetch}>Api</button> */}


    </div>
  );
}


