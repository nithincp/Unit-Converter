/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const btnEl = document.getElementById("btn-el")

btnEl.addEventListener('click',function(){
    let inputValue = inputEl.value
    let meterFeet = (3.281*inputValue).toFixed(3)
    let feetMeter = (inputValue/3.281).toFixed(3)
    let meterFeetString = `${inputValue} meters = ${meterFeet} feet |\
 ${inputValue} feet = ${feetMeter} meters`
    
    let literGallon = (0.264*inputValue).toFixed(3)
    let gallonLiter = (inputValue/0.264).toFixed(3)
    let literGallonString = `${inputValue} liters = ${literGallon} gallons |\
 ${inputValue} gallons = ${gallonLiter} liters`

    let kiloPounds = (2.204*inputValue).toFixed(3)
    let poundKilos = (inputValue/2.204).toFixed(3)
    let kiloPoundsString = `${inputValue} kilos = ${kiloPounds} pounds |\
 ${inputValue} pounds = ${poundKilos} kilos`

    lengthEl.textContent = meterFeetString
    volumeEl.textContent = literGallonString
    massEl.textContent = kiloPoundsString

})
