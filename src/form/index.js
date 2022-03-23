import React from "react";
import { useState,useReducer } from "react";
// import {data} from "../data"
import Model from "./model";
import {reducer} from "./reducer"
const defautState={
    people:[],
    isModelopen:false,
    modalContent:''
}
const Index=()=>{
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defautState);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name){
            const newItem={id:new Date().getTime().toString(),name};
            dispatch({type:'Add_item',payload:newItem})
            setName('');
        }
        else{
            dispatch({type:'No_value'})
            }
        };
    
    const closeModel =()=>{
        dispatch({type:'Close_model'});
    };
    
    return(
        <>
        {state.isModelopen&&(<Model closeModel={closeModel} modelContent={state.modelContent} />)}
    <form onSubmit={handleSubmit} className="form">
        <input 
        type="text" 
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        />
        <button className="btn">add</button>
    </form>
    <div className="itemcontainer">
    {state.people.map((person)=>{
        return(
            <div key={person.id} className="item">
                <h4 className="name">{person.name}</h4>
                <div>
                <button className="btn" onClick={()=>{dispatch({type:'Remove_item',payload:person.id})}}>remove</button>
                </div>
            </div>
        )
    })}
    </div>
</>
    )
}
export default Index;