import React, { Suspense, useState } from "react";
import AddCartComp from "./Component/AddCartComp";
import NameShow from "./Component/NameShow";
import CounterFun from "./Component/CounterFun";
import ListRender from "./Component/ListRender";
import CardComp from "./Component/CardComp";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiCallWithBtn from "./Component/ApiCallWithBtn";
import FormOne from "./Component/FormOne";
import Exestyle from "./Component/Exestyle";
import "./App.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseRefComp from "./Component/UseRefComp";

function App() {

  const MyComp =  React.lazy(()=>import("./Component/ApiCallWithBtn"))
  // const [CompsLoad,setCompsLoad] =  useState(null)

// const handlecomp = async ()=>{
//   let Loadedcomp = await  import("./Component/Grocerry")
//   setCompsLoad(()=>Loadedcomp.default)
// }

  return (
    <>
      {/* <BrowserRouter> */}

      {/* <AddCartComp/> */}

      {/* <NameShow/> */}

      {/* <CounterFun/> */}

      {/* <ListRender/> */}

      {/* 

<ApiCallWithBtn/>


<FormOne/> */}

      {/* <Link to="/home">Home</Link>

<Link to="/product">Product</Link>
<Link to="/about">About</Link> */}

      {/* <Routes>

<Route path="/home" element={<CardComp/>}/>

<Route path="/about" element={<FormOne/> }/>

<Route path="/product" element={<ApiCallWithBtn/>}/>





</Routes> */}

      {/* <Exestyle/> */}

      {/* </BrowserRouter> */}

      {/* <UseRefComp/> */}

      {/* {CompsLoad ? <CompsLoad/> : ""} */}
      <span class="loader"></span>

      <Suspense fallback={<span class="loader"> load</span>
}>

      <MyComp/>
      </Suspense>




      {/* <button onClick={handlecomp}>Gro</button> */}
    </>
  );
}

export default App;
