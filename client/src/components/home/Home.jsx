import React, { useState } from "react";
import "./home.css";
import { baseURL } from "../../../credentials";
import axios from "axios";
import { CircleTick, LoadingTwoLoop } from "../../assets/LoadingLoop";

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
        console.log(formData);
        try {
            const response = await axios.post(`${baseURL}/sendEmail`,formData);
            setLoading(false);
            setStatus(response.status);
        } catch (error) {
            setLoading(false);
            console.log(error);
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
    <form onReset={handleReset} onSubmit={handleSubmit}>
        <h3>Send Email</h3>

        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Name" id="name" 
        onChange={(e) => {
        setFormData({ ...formData, name: e.target.value });
    }}/>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id="email" 
        onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
        }}/>

        {loading && <button type="button">Sending <LoadingTwoLoop/></button>}
        {status===200 && <button type="reset">Sent <CircleTick/></button>}
        {!loading && !status && <button type="submit">Send </button>}
    <p style={{textAlign:"center", marginTop:"30px"}}>Build By Jayant Thakur</p>
    </form>
    </>
}