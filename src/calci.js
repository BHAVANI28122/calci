import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";


const Calci = () =>{

let [num1,setNum1] = useState("");
let [num2,setNum2] = useState("");
let [result,setResult] = useState("");
let [flag, setFlag] = useState("false");


function validate(){

    setResult("");

    if(num1 != null && num2 != null){

        if(!isNaN(num1) && !isNaN(num2)){
            setFlag(true);
        }
    }

    else{
       
       setFlag(false);
    
    }

}

function add(){
 if(flag){
   setResult(num1+num2);
 }
   setNum1("");
   setNum2("");
}

function subtract(){
    if(flag){
    setResult(num1-num2);
    }
    setNum1("");
    setNum2("");
}

function multiply(){
    if(flag){
    setResult(num1*num2);
    }
    setNum1("");
    setNum2("");
}

function division(){
    if(flag){
        setResult(num1/num2);
    }
    setNum1("");
    setNum2("");
}


function firstNum(e){
    setNum1(e.target.value);
    setResult("");
}
function secondNum(e){
    setNum2(e.target.value);
    setResult("");
}


    return(
        <div className="rectangle">
        <h2>React Calculator</h2>   
        <div className="adjust">
        <input type="text"placeholder="NUM1" onChange={firstNum} value={num1}></input> 
        <br></br>
        <input type="text"placeholder="NUM2" onChange={secondNum} value={num2}></input> 
        <br></br>
        <button onClick={()=>{validate();add()}} >+</button>
        <button onClick={()=>{validate();subtract()}}>-</button>
        <button onClick={()=>{validate();multiply()}}>*</button>
        <button onClick={()=>{validate();division()}}>/</button>
        </div>
       {
      result && (
      <div>
        <p>sucess</p>
        <p>Result : {result}</p>
        </div>)
       }
      
        </div>
    );
}
export default Calci;