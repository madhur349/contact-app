import React, {useState} from 'react'


//console.log()
export default function TextForm(props) {

    const handleUpClick=()=>{
        let newText= text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to uppercase!","success")
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleDownClick=()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success")
    }
   
    const [text, setText] = useState('');
   
  return (
    <>
    <div className="container" >
        <h1>{props.title}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
         <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
         <button className="btn btn-primary" onClick={handleDownClick}>Convert to Lowercase</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'dark'}}>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{(text.split(" ").length-1)*0.008} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
