import React from "react";
import "./Feed.css";
function Feed(){
    const ntrj=()=>{
        alert ("THIS IS PAGE");
    }
    return(
       
           <div className = "text">
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea><br/>
               <button type="button" onClick = {()=>ntrj()} class="btn btn-success bot ">success</button>
           </div>

       
    );
}
export default Feed;