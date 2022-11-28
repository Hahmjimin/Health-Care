import '../Net.css';
import {useEffect, useState} from "react";
import axios from "axios";

function Net() {
  const [value, setvalue] = useState("");
  // function submit() {
  //   fetch("http://localhost:3001/Net", {
  //     method : "post", // 통신방법
  //     headers : {
  //       "content-type" : "application/json",
  //     },
  //     body : JSON.stringify(),
  //   })
  //   .then((res)=>res.json())
  //   .then((json)=>{
  //     setvalue({
  //       testbody : json.text,
  //     });
  //   });
  // }
  useEffect(()=> {
    axios.get('api/Net')
    .then(res => console.log(res));
  })

  return (
    <div>
        <div className="Netdiv">
          <img src="./images/Netflix.png" alt="Netflix" className="Netimg"></img>
        </div>
        <div className="netflixbtn"><button>Submit</button></div>
        <div>{value}</div>
    </div>
  );
}

export default Net;
