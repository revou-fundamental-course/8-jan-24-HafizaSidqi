const inputFieldLuas = document.getElementById("luas");
const inputFieldKeliling = document.getElementById("keliling");
let InputValueLuas = inputFieldLuas.value;
let InputValueKeliling = inputFieldKeliling.value;
var outputLuas1 = document.getElementById("outputLuas1")
var outputLuas2 = document.getElementById("outputLuas2")
var outputLuas3 = document.getElementById("outputLuas3")
var outputKeliling1 = document.getElementById("outputKeliling1")
var outputKeliling2 = document.getElementById("outputKeliling2")
var outputKeliling3 = document.getElementById("outputKeliling3")

const idCountButtonLuas = document.getElementById("countButtonLuas")
inputFieldLuas.addEventListener("input", (event) => {
    InputValueLuas = event.target.value
    console.log(InputValueLuas)
    if (validateInput(InputValueLuas)){
        idCountButtonLuas.disabled = false
        console.log(InputValueLuas)
    } else {
        idCountButtonLuas.disabled = true
    }
})

function countButtonLuas(){
    console.log("Button Luas Clicked")
    outputLuas1.innerHTML="L=S x S"
    textluas2 = "L = "+InputValueLuas+" x "+InputValueLuas
    outputLuas2.innerHTML=textluas2
    hasilLuas = InputValueLuas * InputValueLuas
    textluas3 = "L = "+ hasilLuas
    outputLuas3.innerHTML=textluas3
    console.log("luas: ", hasilLuas)
}

function resetButtonLuas(){
    InputValueLuas = ""
    document.getElementById("luas").value = InputValueLuas
    console.log("InputValueLuas: ", InputValueLuas)
    outputLuas1.innerHTML=""
    outputLuas2.innerHTML=""
    outputLuas3.innerHTML=""
}

const idCountButtonKeliling = document.getElementById("countButtonKeliling")
inputFieldKeliling.addEventListener("input", (event) => {
    InputValueKeliling = event.target.value
    console.log(InputValueKeliling)
    if (validateInput(InputValueKeliling)){
        idCountButtonKeliling.disabled = false
        console.log(InputValueKeliling)
    } else {
        idCountButtonKeliling.disabled = true
    }
})

function countButtonKeliling(){
    console.log("Button Keliling Clicked")
    outputKeliling1.innerHTML="K= 4 x S"
    textkeliling2 = "K = 4 x "+InputValueKeliling
    outputKeliling2.innerHTML=textkeliling2
    hasilKeliling = 4 * InputValueKeliling
    textkeliling3 = "K = "+ hasilKeliling
    outputKeliling3.innerHTML=textkeliling3
    console.log("keliling: ", hasilKeliling)
}

function resetButtonKeliling(){
    InputValueKeliling = ""
    document.getElementById("keliling").value = InputValueKeliling
    console.log("InputValueKeliling: ", InputValueKeliling)
    outputKeliling1.innerHTML=""
    outputKeliling2.innerHTML=""
    outputKeliling3.innerHTML=""
}


function validateInput(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}