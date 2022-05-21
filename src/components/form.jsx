import React from 'react';
import { useState } from 'react';
export function Form(props){
    
    const [text, setText]= useState("");
    
   
    const clicked= ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("changed to uppercase1", "success");
    }
    const clickedlow= ()=>{
        let newText1 = text.toLowerCase();
        setText(newText1);
        props.showalert("changed to lowercase!", "success");
       
    }
    const handlechange= (event)=>{
        setText(event.target.value);

    };
    const clearClicked= ()=>{
        setText("");
        props.showalert("text is cleared!", "success");
    };
    const clickedspaces=()=>{
        let newesttext= text.split(/[ ]+/);
        setText(newesttext.join(" "));
        props.showalert("extra spaces is removed!", "success");
    }
    const copyClicked=()=>{
        let selected= document.getElementById("mybox");
        selected.select();
        navigator.clipboard.writeText(selected.value);
        props.showalert("copied to clipboard!", "success");
    }
    return(
        <div>
        <div className="container " >
               <div className="container mt-3" style={{color: props.mode==='dark'?'white':'black'}}>
                   <h2>ENTER YOUR TEXT HERE TO GET CAPITALIZE!</h2>
                </div>
                <div className="py-1">
                    <textarea style={{backgroundColor:props.mode==='dark'?'#dfebea':'white', color: props.mode==='dark'?'black':'black'}} value={text} className="form-control" id="mybox" onChange={handlechange} rows="9"></textarea>
                </div>
                <div className='container py-2' style={{color: props.mode==='dark'?'white':'black'}}>
                   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clicked}>Change To Uppercase</button>
                   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickedlow}>Change To Lowercase</button>
                   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickedspaces}>Remove Extra Spaces</button>
                   <button disabled={text.length===0} className="btn btn-secondary my-1 mx-1" onClick={copyClicked}>Copy Text</button>
                   <button disabled={text.length===0} className="btn btn-danger my-1 mx-1" onClick={clearClicked}>Clear Text</button>
                   
                </div>
        </div>
            <div className='container px-4' style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Summary of the Text</h2>
                <ul>
                
                    <li>You have written {text.length} Characters.</li>
                    <li>You have written {text.split(" ").filter((element)=>{return(element.length!==0)}).length} words.</li>
                    <li>{0.008*text.split(" ").length-0.008} minutes to read.</li>
                </ul>
            </div>
        </div>

    );
}
    
