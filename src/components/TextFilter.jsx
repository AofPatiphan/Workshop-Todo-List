import { useEffect, useState } from "react";

function TextFilter(props) {
const [input,setInput]=useState('')
useEffect(()=>{
  
    const timeoutId = setTimeout(()=>{
      props.setSearchText(input)
      console.log("Input changed")
      
  },1500)
  return()=>{
    clearTimeout(timeoutId)
  }
},[input])
  const handleChangeText = e => {
    setInput(e.target.value)
  };
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control rounded-0"
        value={input}
        onChange={handleChangeText}
      />
      <button
        className="btn btn-secondary rounded-0"
        onClick={() => props.setSearchText('')}
      >
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
  );
}

export default TextFilter;
