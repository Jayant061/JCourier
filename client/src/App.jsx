import React, { lazy } from "react";
const Home = lazy(()=>import("./components/home/Home"));
export default function App(){
  return <>
  <div className="app">
    <Home/>
  </div>
  </>
}