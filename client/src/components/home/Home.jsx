import React, { useEffect, useState } from "react";
import "./home.css";
import { baseURL } from "../../../credentials.js";
import axios from "axios";
import { CircleTick, Fail, LoadingTwoLoop } from "../../assets/LoadingLoop";
import { useDispatch, useSelector } from "react-redux";
import { updateAll, updateEmail, updateMessage, updateName } from "../../store/UserDataSlice.js";

export default function Home() {
    const dispatch = useDispatch();
    const store = useSelector((state)=>state?.userData);
    const [loading,setLoading] = useState(false);
    const [status,setStatus] = useState(null);
    async function handleSubmit(e){
        setLoading(true);
        e.preventDefault();
        try {
            const response = await axios.post(`${baseURL}/sendEmail`,store);
            setLoading(false);
            setStatus(response.status);
        } catch (error) {
            setLoading(false);
            setStatus(400);
        }
    }
    function handleReset(){
            dispatch(updateAll({name:"",email:"",message:""}));
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
        <input type="text" placeholder="Name" id="name" required
        onChange={(e) => {
            setStatus(null);
        dispatch(updateName(e.target.value));
        
    }}/>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id="email" required
        onChange={(e) => {
            setStatus(null);
            dispatch(updateEmail(e.target.value))
        }}/>

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" placeholder="your message here"
        onChange={(e)=>{
            setStatus(null);
            dispatch(updateMessage(e.target.value));
        }}/>

        {loading && <button type="button">Sending <LoadingTwoLoop/></button>}
        {status!==null && (status===200 ? <button type="reset" style={{color:"#4BB543" }}>Sent <CircleTick/></button>:
        status===400 && <button type="reset" style={{color:"#FC100D"}}>Couldn't sent. <Fail/></button>)}
        {!loading && !status && <button type="submit">Send </button>}
    <p style={{textAlign:"center", marginTop:"30px"}}>Build By Jayant Thakur</p>
    </form>
    </>
}