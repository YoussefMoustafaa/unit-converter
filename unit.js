const numberEl = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const unitContainer = document.getElementById("unit-container")
const errorMsg = document.getElementById("error-msg")


numberEl.addEventListener("click", function() {
    numberEl.innerHTML = ""
})

convertBtn.addEventListener("click", function() {
    let number = Number(numberEl.textContent)
    if (number) {
        errorMsg.style.display = "none"
        unitContainer.style.display = "block"
        convertLength(number)
        convertVolume(number)
        convertMass(number)
    } else {
        errorMsg.style.display = "block"
        unitContainer.style.display = "none"
    }
})

function convertLength(num) {
    let numberInFeet = num * 3.281
    numberInFeet = numberInFeet.toFixed(3)
    let numberInMeters = num / 3.281
    numberInMeters = numberInMeters.toFixed(3)
    lengthEl.innerHTML = `${num} meters = ${numberInFeet} feet | ${num} feet = ${numberInMeters} meters`
}

function convertVolume(num) {
    let numberInGallons = num * 0.264
    numberInGallons = numberInGallons.toFixed(3)
    let numberInLiters = num / 0.264
    numberInLiters = numberInLiters.toFixed(3)
    volumeEl.innerHTML = `${num} liters = ${numberInGallons} gallons | ${num} gallons = ${numberInLiters} liters`
}

function convertMass(num) {
    let numberInPounds = num * 2.204
    numberInPounds = numberInPounds.toFixed(3)
    let numberInKilos = num / 2.204
    numberInKilos = numberInKilos.toFixed(3)
    massEl.innerHTML = `${num} kilos = ${numberInPounds} pounds | ${num} pounds = ${numberInKilos} kilos`
}
