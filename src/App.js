import React, { useState } from 'react';
// import MainScreen from './MainScreen';
import "./style.css"
function App() {

const [first,setFirst]=React.useState(" ");
const [second,setSecond]=useState("");
const [third,setThird]=useState('');
const [fourth,setFourth]=useState('');
const [fifth,setFifth]=useState('');
// const [count,setCount]=useState(0);
var count=0;
const Word="Hello";
const word="hello";


const EnterClicked=(event)=>{
if(event.key=="Enter"){

  console.log("name",event.target.name);
  let name=event.target.name;
  if(word[0]==first||Word[0]==first){
    document.getElementById('f'+name).classList.add('green');
    count++;

    // console.log('yes');
  }
  else{
    document.getElementById('f'+name).classList.add('red');
  }

  if(word[1]==second||Word[1]==second){
    console.log('yes second')
    document.getElementById('s'+name).classList.add('green');
    count++;
    // console.log('yes');
  }
  else{
    document.getElementById('s'+name).classList.add('red');
  }

  if(word[2]==third||Word[2]==third){
    document.getElementById('t'+name).classList.add('green');
    count++;
    // console.log('yes');
  }
  else{
    document.getElementById('t'+name).classList.add('red');
  }

  if(word[3]==fourth||Word[3]==fourth){
    document.getElementById('fo'+name).classList.add('green');
    count++;
    // console.log('yes');
  }
  else{
    document.getElementById('fo'+name).classList.add('red');
  }

  if(word[4]==fifth||Word[4]==fifth){
    document.getElementById('fi'+name).classList.add('green');
    count++;
    // console.log('yes');
  }
  else{
    document.getElementById('fi'+name).classList.add('red');
  }
  console.log(count);
  // call();
  if(count==5){
    // console.log(count);
    alert('win');
  }
  else{
    count=0;
  }
  setFirst("");
  setSecond("");
  setThird("");
  setFourth("");
  setFifth("");
}
}
// const call=()=>{
//   if(count==4){
//     console.log(count);
//     alert('win');
//   }
// }

const getInputValue=(event)=>{
  // const val=;
  // console.log('kji',first)
setFirst(event.target.value)

}
// console.log(first)


  return (
    <>
    <h1>Play Me </h1>

    <>
{/* <div className="main-div"> */}
  <div className='div1'>
  <input type="text" maxlength="1" name="input1" id='f1'
//  onChange={event => setFirst(event.target.value)} 
// value={first}
onChange={(e)=>{
  setFirst(e.target.value);
}}
></input>
<input type="text" maxlength="1" name="input2" id='s1'
// value={second} 
onChange={(e)=>{
  setSecond(e.target.value);
}}></input>
<input type="text" maxlength="1" name="input3" id='t1'
onChange={(e)=>{
  setThird(e.target.value);
}}
></input>
<input type="text" maxlength="1" name="input4" id='fo1'
onChange={(e)=>{
  setFourth(e.target.value);
}}></input>
<input type="text" maxlength="1" name="1" id='fi1'
onChange={(e)=>{
  setFifth(e.target.value);
}}  
onKeyPress={EnterClicked}  ></input>
  </div>
  <div className='div1'>
<input type="text" maxlength="1" name="input6" id="f2"
onChange={(e)=>{
  setFirst(e.target.value);
}}></input>
<input type="text" maxlength="1" name="input7" id="s2"
onChange={(e)=>{
  setSecond(e.target.value);
}}></input>
<input type="text" maxlength="1" name="input8" id="t2"
onChange={(e)=>{
  setThird(e.target.value);
}}></input>
<input type="text" maxlength="1" name="input9" id="fo2"
onChange={(e)=>{
  setFourth(e.target.value);
}}></input>
<input type="text" maxlength="1" name="2"
onKeyPress={EnterClicked}  id="fi2" 
onChange={(e)=>{
  setFifth(e.target.value);
}}  ></input>
</div>
  <div className='div1'>
<input type="text" maxlength="1" name="input11" id="f3"
onChange={(e)=>{
  setFirst(e.target.value);
}}></input>
<input type="text" maxlength="1" name="input12" id="s3"
onChange={(e)=>{
  setSecond(e.target.value);
}}></input>
<input type="text" maxlength="1" name="input13" id="t3"
onChange={(e)=>{
  setThird(e.target.value);
}}></input>
<input type="text" maxlength="1" name="input14" id="fo3"
onChange={(e)=>{
  setFourth(e.target.value);
}}></input>
<input type="text" maxlength="1" name="3" 
onKeyPress={EnterClicked} id="fi3"
onChange={(e)=>{
  setFifth(e.target.value);
}}  ></input>
</div>

  <div className='div1'>
<input type="text" maxlength="1" name="input16" id="f4"
onChange={(e)=>{
  setFirst(e.target.value);
}}></input>
<input type="text" maxlength="1" name="input17" id="s4"
onChange={(e)=>{
  setSecond(e.target.value);
}}></input>
<input type="text" maxlength="1" name="input18" id="t4"
onChange={(e)=>{
  setThird(e.target.value);
}}></input>
<input type="text" maxlength="1" name="input19" id="fo4"
onChange={(e)=>{
  setFourth(e.target.value);
}}></input>
<input type="text" maxlength="1" name="4"
onKeyPress={EnterClicked}  id="fi4"
onChange={(e)=>{
  setFifth(e.target.value);
}}  ></input>
</div>

 {/* </div> */}

</>
    </>
  )
}

export default App;
