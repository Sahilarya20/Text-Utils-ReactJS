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
       
        navigator.clipboard.writeText(text);
        
        props.showAl("Text Copied","success");
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
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
                <button disabled={text.length===0} className="btn btn-primary " onClick={handleUpClick}>Conver to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handlelowClick}>Conver to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
                <h2> Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    );
}
