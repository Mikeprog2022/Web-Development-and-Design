let price = 3.26;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

const totalPrice = document.getElementById("price-screen")
const btn = document.getElementById("purchase-btn")
const cashDrawer = document.getElementById("cash-drawer-display")
const cashInput = document.getElementById("cash")
const change = document.getElementById("change-due")

const priceNonDecimal =  Math.round(price*100)
totalPrice.innerHTML = `Total: $${price}`

const currencyValue = [
  ['PENNY', 1],
  ['NICKEL', 5],
  ['DIME', 10],
  ['QUARTER', 25],
  ['ONE', 100],
  ['FIVE', 500],
  ['TEN', 1000],
  ['TWENTY', 2000],
  ['ONE HUNDRED', 10000]
]; 

const cidNonDecimal = []
for(const [key, value] of cid){
  cidNonDecimal.push([key, Math.round(value*100)])
}
const cidObj = {}
for(const [key,val] of cidNonDecimal){
  cidObj[key] = val
}
console.log(cidObj) 

const numOfCoinsInDrawer = {}
for(let i = 0; i < 10; i++){
  currencyValue.forEach(([key1, val1])=>{
    cidNonDecimal.forEach(([key2, val2])=>{
      if(key1===key2){
        numOfCoinsInDrawer[key1] = val2/val1
      }
    })
  })
}


function display(array){
  let output = ""
  array.forEach((arr)=>{
    
    switch(arr[0]){
      case "PENNY":
        output += `<p>Pennies: $${arr[1]}</p>`
        break;
      case "NICKEL":
        output += `<p>Nickels: $${arr[1]}</p>`
        break;
      case "DIME":
        output += `<p>Dimes: $${arr[1]}</p>`
        break;
      case "QUARTER":
        output += `<p>Quarters: $${arr[1]}</p>`
        break;
      case "ONE":
        output += `<p>Ones: $${arr[1]}</p>`
        break;
      case "FIVE":
        output += `<p>Fives: $${arr[1]}</p>`
        break;
      case "TEN":
        output += `<p>Tens: $${arr[1]}</p>`
        break;
      case "TWENTY":
        output += `<p>Twenties: $${arr[1]}</p>`
        break;
      case "ONE HUNDRED":
        output += `<p>Hundreds: $${arr[1]}</p>`
        break;
    }
  })
  cashDrawer.innerHTML = output
}
display(cid)

btn.addEventListener("click",()=>{
  const cashInputValue = parseFloat(cashInput.value);
  const cashInputNonDecimal = Math.round(cashInputValue*100)
  if (isNaN(cashInputValue)) {
    alert("Please enter a valid cash amount.");
    cashInput.value = '';
    return;
  }
  if(cashInputNonDecimal < priceNonDecimal){
    alert("Customer does not have enough money to purchase the item")
    cashInput.value = '';
    return
  }  
  if(cashInputNonDecimal === priceNonDecimal){
    change.innerHTML = '<p>No change due - customer paid with exact cash</p>';
     cashInput.value = '';
    return
  }

  const changeGiven = {}
  const fullChange = cashInputNonDecimal - priceNonDecimal
  let remainingChange = fullChange

  const drawerAmount = cidNonDecimal.reduce((acc,val)=> acc + val[1],0)
  if(drawerAmount < fullChange){
    change.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return
  }

  let canBeDone = false

  function runCheck(k,v){
    if(remainingChange >= v && cidObj[k] > 0){
        remainingChange -= v
        cidObj[k] -= v
        canBeDone = true
        changeGiven[k] = (changeGiven[k] || 0) + v
        if(remainingChange >= v){
            runCheck(k, v)
        }
    }
  }

  for(const [key, value] of currencyValue.reverse()){    
    runCheck(key, value)    
    
    if(remainingChange > 0){
      canBeDone = false
    }
  }

  if(!canBeDone){
    change.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>'
    return
  }

  const changeGivenArray = []
  Object.keys(changeGiven).forEach((key)=>{
    changeGivenArray.push([key,changeGiven[key]/100])
  })

  let changeString = ''
  for(const [key,val] of changeGivenArray){
    changeString += ` <p>${key}: $${val}</p>`
  }

  if(drawerAmount === fullChange){
    change.innerHTML = `<p>Status: CLOSED </p>${changeString}`
    return;
  }

  change.innerHTML = `<p>Status: OPEN </p>${changeString}`

  console.log(cidObj)

  const updatedCid = []
  Object.keys(cidObj).forEach((key)=>{
    updatedCid.push([key,cidObj[key]/100])
  })

  console.log(updatedCid)
  display(updatedCid)

})