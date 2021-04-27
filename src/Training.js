import React,{ useState } from 'react';
import './Training.css';
import T1 from './T1';

/*function Training() {
     function ntrj(){
         alert ('this is error');
     }
     const [fname,setName] = useState("nadarajan");
    return(
         <div>
              <T1/>
             <h1 className = "head">nadarajan</h1>
             <h2>madthan kumAR</h2>
             <p>ntrj</p>
             <button type = "button" onClick = { ()=>ntrj()}>Submit</button>
            
           
       
            <h1>Hi im a {setName} react developer</h1>
             <div>
        
    );
}
export default Training;*/
function Training(props) {
    const [fname,setName] = useState("nadarajan");
    
    return(
        <div>
            <h1>Hi im a {fname} react developer</h1>
            <button onClick = { () => setName("rahul")}>Submit</button>
            <T1 name = {fname}/>
            prasanna friend {fname}
        </div>
    );
}
export default Training;