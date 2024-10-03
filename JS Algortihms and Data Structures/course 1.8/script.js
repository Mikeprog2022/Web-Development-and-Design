const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");

btn.addEventListener("click", function(){
  const value = input.value;
  const lowerValue = value.toLowerCase();
  let inverted = '';
  let cleanedString = '';
  const stringArray = [];

  if(value.length === 0){
    alert("Please input a value");
    return;
  }

  for(let i = 0;i<lowerValue.length;i++){    
    stringArray.push(lowerValue[i])
  }

  const cleaned = stringArray.filter(sanitize);
  for(let i=0; i<cleaned.length; i++){
    cleanedString += cleaned[i];
  }
  
  if(cleaned.length === 1){
    result.innerHTML = value + " is a palindrome"
    return;
  }

  if(cleaned[0] !== cleaned[cleaned.length-1]){
    result.innerHTML = value + " is not a palindrome"
    return;
  }

  for(let i=cleaned.length-1; i>=0; i--){
    inverted += cleaned[i];
  }

  if(inverted !== cleanedString){
    result.innerHTML = value + " is not a palindrome"
    return;
  }else{
    result.innerHTML = value + " is a palindrome"
    return;
  }

  function sanitize(value){
    let check = (value >='a' && value<='z') || value > 0;
    return check;
  }

});