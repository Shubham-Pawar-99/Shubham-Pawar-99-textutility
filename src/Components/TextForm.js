import React, { useState } from 'react'

export default function TextForm(props) {

    const HandleCopy = () => {
        let newstr = document.getElementById("myBox");
        newstr.select();
        navigator.clipboard.writeText(newstr.value);
        props.showAlert("Text Copied", "success");
    }

    const HandleExtraSpace = () => {
        let newText = text.split(/\s+/).filter(Boolean);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
    };

    const HandleUPclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Uppercased", "success");
    }
    const HandleLOclick = () => {
        let newText = text.toLowerCase();
        setText(newText);

        props.showAlert("Text LowerCased", "success");
    }
    const HandleReverseclick = () => {
        if (text != null) {
            let rev = "";
            for (let i = text.length - 1; i >= 0; i--) {
                rev += text[i];
            }
            setText(rev);
            props.showAlert("Text Reversed", "success");
        }
        else
            props.showAlert("First Enter the Text", "danger");
    }
    const HandleClearclick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const onchangeEvent = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");       //react hook

    return (
        <>
            <div style={{ color: props.mode === "light" ? 'black' : 'white' }}>
                <h1 className='mb-4'>{props.heading}</h1>        {/* react Props */}
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onchangeEvent} style={{ backgroundColor: props.mode === "light" ? 'white' : '#031126', color: props.mode === "light" ? 'black' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={HandleUPclick} >ConvertToUppercase</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={HandleLOclick} >ConvertToLowercase</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={HandleExtraSpace} >Remove Extra Space</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={HandleCopy} >Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={HandleReverseclick} >Reverse</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={HandleClearclick} >Clear Text</button>
            </div >
            <div className="container my-3" style={{ color: props.mode === "light" ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} Words and {text.length} characters </p>
                <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>

                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to the preview here"}</p>
            </div>
        </>
    )
}
