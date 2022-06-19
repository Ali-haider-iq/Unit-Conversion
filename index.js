const inputnum = document.getElementById("input-number")
const convert = document.getElementById("convert")
const lengthEl = document.getElementById("length")
const VolumeEl = document.getElementById("Volume")
const MASSEl = document.getElementById("Mass")


const meterToFeet =  3.281
const FeetToMeter =  0.305
const LitersToGallons = 0.2641
const GallonsToLiters = 3.7854
const kiloToPound = 2.2046
const PoundToKilo = 0.4535 

convert.addEventListener ("click" , function(){
    let convertnumber = inputnum.value 

    // ................Length..................
    const convertMeteToFeet = convertnumber * meterToFeet
    const convertFeetToMeter = convertnumber * FeetToMeter

    lengthEl.textContent  = `
    ${convertnumber} meter = ${convertMeteToFeet.toFixed(3)} feet
      | 
    ${convertnumber} feet = ${convertFeetToMeter.toFixed(3)} meters` 


    // .....................Volume..................

    const  convertLitersToGallons = convertnumber * LitersToGallons
    const  convertGallonsToLiters = convertnumber * GallonsToLiters

    VolumeEl.textContent  = `
    ${convertnumber} Liters = ${convertLitersToGallons.toFixed(3)} Gallons
      | 
    ${convertnumber} Gallons = ${convertGallonsToLiters.toFixed(3)} Liters`


    // ......................MASS........................

    const  convertkiloToPound = convertnumber * kiloToPound
    const  convertPoundToKilo = convertnumber * PoundToKilo

    MASSEl.textContent  = `
    ${convertnumber} Kilos = ${convertkiloToPound.toFixed(3)} Pounds
      | 
    ${convertnumber} Pounds = ${convertPoundToKilo.toFixed(3)} Kilos`
})

