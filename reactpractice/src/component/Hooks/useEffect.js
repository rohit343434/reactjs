import React, {useState,useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(0);

  useEffect(()=>{

    // console.log("hiii")
    document.title= `Chats(${myNum})`;
   
  });   
//   arraydependency =firsttime maj dekhau joia

 const  updatecount=()=>{
    setMyNum(myNum+1)
  }

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={updatecount}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        
      </div>
    </>
  );
};

export default UseEffect;


// to do something after render
// like 5 second bad kuch add karna ho