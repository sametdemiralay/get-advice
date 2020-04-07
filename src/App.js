import React, { useState, useEffect } from "react";
import axios from "axios";

export const App = () => {
 const [state, setState] = useState("");
 useEffect(() => {
  fetchAdvice();
 }, []);

 const fetchAdvice = () => {
  axios
   .get("https://api.adviceslip.com/advice")
   .then(response => {
    const { advice } = response.data.slip;
    setState(advice);
   })
   .catch(error => {
    console.log(error);
    setState("NOT DEFINED...")
   });
 };

 return (
  <div className="app">
   <div className="card">
    <h1 className="heading"> {state} </h1>
    <button className="button" onClick={()=>fetchAdvice()} >
      <span>GIVE ME ADVICE!</span>
    </button>
   </div>
  </div>
 );
};




// -> Bu kullanım component her render olduğunda çalışacaktır:
// useEffect(() => {
//   ...
// });

// -> sadece yükleme işlemi sonrası çalışması için:
// useEffect(() => {
//   ...
// },
// []
// );

// -> Sadece seçtiğimiz bir değişkenin değeri değiştiğinde çalışması için:
// useEffect(() => {
//   ...
// },
// [deger]
// );
