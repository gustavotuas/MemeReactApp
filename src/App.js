import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

 const [linea1,setLinea1] = useState('');
 const [linea2,setLinea2] = useState('');
 const [imagen,setImagen] = useState('');

 const onChangeLinea1 = function(evento){
  setLinea1(evento.target.value);
 }

 const onChangeLinea2 = function(evento){
  setLinea2(evento.target.value);
 }

 const onChangeImagen = function(evento){
   setImagen(evento.target.value);
 }

 const onClickExportar = function(evento){

  html2canvas(document.querySelector("#meme")).then(canvas => {
    
    var img = canvas.toDataURL("image/png");
    var link= document.createElement("a");
    link.download = "meme.png";
    link.href = img;
    link.click();

  })
  .catch(error => console.log(error));
}

  return (
    <div className="App">
      <br/>
    <select onChange={onChangeImagen}>
      <option value="fire">Casa en llamas</option>
      <option value="futurama">Futurama</option>
      <option value="drake">Drake</option>     
    </select>
    <br/>

<input onChange={onChangeLinea1} type="text" placeholder="linea1"/> <br/>
<input onChange={onChangeLinea2} type="text" placeholder="linea2"/> <br/>

<br/>
<button  onClick={onClickExportar} type="submit">Exportar</button>

<div className="meme" id="meme">
<span>{linea1}</span>
<span>{linea2}</span>
<img src={"/img/"+imagen+ ".jpg"}/>
</div>

</div>
  );
}                             

export default App;
