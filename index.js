const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


let lengthEq = ""
let volumeEq = ""
let massEq = ""
let num = ""

btnEl.addEventListener("click", function(){
    num = inputEl.value
    lengthEq = `${num} meters = ${(num * 3.2808).toFixed(3)} feet | ${num} feet = ${(num * 0.3048).toFixed(3)} meters`
    volumeEq = `${num} liters = ${(num * 0.264).toFixed(3)} gallons | ${num} gallons = ${(num * 3.7854).toFixed(3)} liters`
    massEq = `${num} kilos = ${(num * 2.204).toFixed(3)} pounds | ${num} pounds = ${(num * 0.4535).toFixed(3)} kilos`
    lengthEl.innerText = lengthEq
    volumeEl.innerText = volumeEq
    massEl.innerText = massEq
})