const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romans = [
    {
      "value": 1000,
      "roman": "M"
    },
    {
      "value": 900,
      "roman":"CM"
    },
    {
      "value": 500,
      "roman":"D"
    },
    {
      "value": 400,
      "roman":"CD"
    },
    {
      "value": 100,
      "roman":"C"
    },
    {
      "value": 90,
      "roman":"XC"
    },
    {
      "value": 50,
      "roman":"L"
    },
    {
      "value": 40,
      "roman":"XL"
    },
    {
      "value": 10,
      "roman":"X"
    },
    {
      "value": 9,
      "roman":"IX"
    },
    {
      "value": 5,
      "roman":"V"
    },
    {
      "value": 4,
      "roman":"IV"
    },
    {
      "value": 1,
      "roman":"I"
    },];

btn.addEventListener("click", (obj)=>{
  obj.preventDefault();
  const inputValue = parseInt(input.value)
  if(inputValue < 1){
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }
  else if(!inputValue){
    output.textContent = "Please enter a valid number";
    return;
  }
  else if(inputValue > 3999){
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }
  else{       
    output.textContent = convertToRoman(inputValue) ;
    toRoman=""
  }
  
})

let toRoman = "";

function convertToRoman(inputValue){
  
  if(inputValue === 0){
    return toRoman;
  }
  else{
    const roman = romans.find((obj)=> inputValue >= obj.value)
    toRoman += roman.roman;       
    inputValue -= roman.value;
    return convertToRoman(inputValue)      
  }

}