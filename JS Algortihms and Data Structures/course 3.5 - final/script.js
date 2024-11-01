const check = document.getElementById("check-btn");
const input = document.getElementById("user-input");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const regex1 = /^1 (\d)(\d)(\d)\-(\d)(\d)(\d)\-(\d)(\d)(\d)(\d)$/
const regex1b = /^1 (\((\d)(\d)(\d)\)) (\d)(\d)(\d)\-(\d)(\d)(\d)(\d)$/
const regex1c = /^1(\((\d)(\d)(\d)\))(\d)(\d)(\d)\-(\d)(\d)(\d)(\d)$/
const regex1d = /^1 (\d)(\d)(\d) (\d)(\d)(\d) (\d)(\d)(\d)(\d)$/
const regexb = /^(\d)(\d)(\d)\-(\d)(\d)(\d)\-(\d)(\d)(\d)(\d)$/
const regexc = /(\((\d)(\d)(\d)\))(\d)(\d)(\d)\-(\d)(\d)(\d)(\d)$/

const numbersOnly = /^\d+$/

clear.addEventListener("click",() => result.textContent = "")
check.addEventListener("click", checkInput)

function checkInput () {  
  const inputValue = input.value
  const cleanInput = inputValue.replace(/[^\d]/g, "")

  function checkRegex(number){
    const regex1Array = [regex1, regex1b, regex1c, regex1d]
    const regex2Array = [regexb, regexc]

    if(cleanInput.length > 10 && number[0] !== "1"){
      return false
    }

    if (number[0] === "1"){
      return regex1Array.some((regex)=> regex.test(number))
    }else{
      return regex2Array.some((regex)=> regex.test(number))
    }
  }

  if(inputValue === ""){
    return alert("Please provide a phone number")
  }
  
  if(cleanInput.length < 10 || !numbersOnly.test(cleanInput)){
    result.textContent = `Invalid US number: ${inputValue}`
    return
  }

  if(numbersOnly.test(inputValue) && inputValue.length === 10 ){
    result.textContent = `Valid US number: ${inputValue}`
    return
  }

  checkRegex(inputValue) ? result.textContent = `Valid US number: ${inputValue}` : result.textContent = `Invalid US number: ${inputValue}`
  
}