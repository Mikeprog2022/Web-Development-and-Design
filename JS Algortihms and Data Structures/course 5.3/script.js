const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");
const stats = [hp, attack, defense, specialAttack, specialDefense, speed]


const api = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"

searchBtn.addEventListener("click", ()=>{
  types.innerHTML = ``
  const cleanInput = input.value.toLowerCase()
  if (!cleanInput) return;
  fetch(`${api}/${cleanInput}`).then((obj)=> obj.json()).then((data)=>{
    console.log(data.stats)
    height.textContent = `Height: ${data.height}`
    weight.textContent = `Weight: ${data.weight}`
    pokemonName.textContent = data.name
    pokemonId.textContent = `#${data.id}`
    spriteContainer.innerHTML = `<img src="${data.sprites.front_default}" id="sprite">`
    data.types.forEach(({_slot,type})=> types.innerHTML += `<span class="type ${type.name}">${type.name}</>`)
    //data.stats.forEach
    stats.forEach((statEl)=>{
     const dataFound =  data.stats.find(({base_stat, effort, stat})=> stat.name === statEl.id )
     statEl.textContent = dataFound.base_stat
    })    
    
  }).catch((err)=>{
    alert("Pokémon not found")
  })
})