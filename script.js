const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCeilsius = document.getElementById("toCeilsius")
const result = document.getElementById("result")
let temp;

function convert(){
  if(toFahrenheit.checked){
temp = Number(textBox.value);
temp = temp * 9/5 + 32;
 result.textContent = temp.toFixed(1)+ "℉";
  }
  else if(toCeilsius.checked){
    temp = Number(textBox.value);
    temp = (temp - 32) * 5/9 
    result.textContent = temp.toFixed(1) + "℃";
  }
  else{
    result.textContent = "select unit"
  }
}