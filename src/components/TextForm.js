import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAl("Changed to Upper Case","success");
    }
    const handlelowClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAl("Changed to lower Case","success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = '';
        setText(newText);
        props.showAl("Text Cleared","success");
    }
    const handleCopy =()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAl("Text Cleared","success");
    }
    const handleOnChange = (event) => {
        // console.log("On change ");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
 
    return (
        <>
            <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary " onClick={handleUpClick}>Conver to uppercase</button>
                <button className="btn btn-primary mx-2 " onClick={handlelowClick}>Conver to lowercase</button>
                <button className="btn btn-primary mx-2 " onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
                <h2> Your text summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter yout text to Preview"}</p>
            </div>
        </>
    );
}
