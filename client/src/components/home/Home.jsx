import React, { useState } from "react";
import "./home.css";
import { baseURL } from "../../../credentials.js";
import axios from "axios";
import { CircleTick, Fail, LoadingTwoLoop } from "../../assets/LoadingLoop";

export default function Home() {
    const[formData,setFormData] = useState({
        name:"",
        email:""
    });
    const [loading,setLoading] = useState(false);
    const [status,setStatus] = useState(null);
    async function handleSubmit(e){
        setLoading(true);
        e.preventDefault();
        try {
            const response = await axios.post(`${baseURL}/sendEmail`,formData);
            setLoading(false);
            setStatus(response.status);
        } catch (error) {
            setLoading(false);
            setStatus(400);
        }
    }
    function handleReset(){
            setFormData({name:"",email:""});
            setLoading(false);
            setStatus(null)
    }
    return <>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form onReset={handleReset} onSubmit={handleSubmit} >
        <h3>Send Email</h3>

        <label htmlFor="name">Name</label >
        <input type="text" placeholder="Name" id="name" 
        onChange={(e) => {
            setStatus(null);
        setFormData({ ...formData, name: e.target.value });
    }}/>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id="email" 
        onChange={(e) => {
            setStatus(null);
            setFormData({ ...formData, email: e.target.value });
        }}/>

        {loading && <button type="button">Sending <LoadingTwoLoop/></button>}
        {status!==null && (status===200 ? <button type="reset" style={{color:"#4BB543" }}>Sent <CircleTick/></button>:
        status===400 && <button type="reset" style={{color:"#FC100D"}}>Couldn't sent. <Fail/></button>)}
        {!loading && !status && <button type="submit">Send </button>}
    <p style={{textAlign:"center", marginTop:"30px"}}>Build By Jayant Thakur</p>
    </form>
    </>
}