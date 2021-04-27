import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/*class Demo{
   methodone()
   {
     var a = 5;
     var b = 10;
     var c = a*b;
     document.getElementById('root').innerHTML = c;
   }
   methodtwo()
   {
     var a = 51;
     var b = 10;
     var d = a*b;
     document.getElementById('root').innerHTML = d;
   }
}
var memo = new Demo();
memo.methodone();
memo.methodtwo();

var e = (x) =>
{
 var q = 2;
 var w = 2;
 var y = q*w*x;
 document.getElementById('root').innerHTML =y;
}
e(20);*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
