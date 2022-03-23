import React from "react";
import { useState } from "react";
import {data} from "../data"
// import Model from "./model";

const Index=()=>{
    const [name,setName]=useState('')
    const handleSubmit=(e)=>{
        e.preventdefault();
        setName(e.value);
    }
    return(
        <>
       
    <form onSubmit={handleSubmit} className="form">
    
        <input 
        type="text" 
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        />
        
        <button className="btn">add</button>
    </form>
    <div className="itemcontainer">
    {data.map((person)=>{
        return(
            <div key={person.id} className="item">
                <h4 className="name">{person.name}</h4>
                <div>
                <button className="btn">remove</button>
                </div>
            </div>
        )
    })}
    </div>
    

    
        </>
    )
}
export default Index;