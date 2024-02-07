import axios from "axios";
import React, { lazy, useEffect } from "react";
import { baseURL } from "../credentials";
const Home = lazy(()=>import("./components/home/Home"));
export default function App(){
  const initiateServer = async()=>{
    try {
      const res = await axios.get(baseURL);
      console.log(res.data);
    } catch (error) {
      
    }
    }
    useEffect(()=>{
      let subs = true;

      subs && initiateServer();
      return ()=>{subs = false;}
    },[]);
  return <>
  <div className="app">
    <Home/>
  </div>
  </>
}