import React, {useState} from 'react';

export default function TextForm(props){
const handleUpClick=()=>{
    setText("you have clicked handleupclick")
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("convert to uppercase!","success");

}
const handleDownClick=()=>{
    setText("you have clicked handleDownclick")
    let newTxt=text.toLowerCase();
    setText(newTxt)
    props.showAlert("convert to lowercase!","success");

}
const handleExtraSpace=()=>{
    let newTet=text.split(/[ ]+/);
    setText(newTet.join(" "));
    props.showAlert("convert to RemoveExtraspace!","success");
}

const handleBlankClick=()=>{
    setText("you have clicked handleBlankclick")
    let newTxt=" ";
    setText(newTxt)
    props.showAlert("convert to clear!","success");

}
// const handleInverseClick=()=>{
//     setText("you have clicked handleInverseclick")
//     let newTx=text.lastIndexOf();
//     setText(newTx)

// }
const handleOnChange=(event)=>{
    setText(event.target.value)

}

    const[text, setText]=useState('Enter the text here..');

    return(<>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleBlankClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra space</button>
        </div>

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} word and {text.length} character</p>
        <p>{0.008 * text.split(" ").length}minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

        </div>


        
  </>  )
}