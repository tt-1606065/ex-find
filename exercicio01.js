

function dispararExercicio01(){
    const elInputo01 = document.querySelector("#ex_01_numero1")
    const elInputo02 = document.querySelector("#ex_01_numero2")

    const valor01 = Number(elInputo01.value)
    const valor02 = Number(elInputo02.value)

    const resultado = soma(valor01, valor02)

    const elResultado01 = document.querySelector("#ex_01_resultado")
    elResultado01.innerHTML = resultado
}

function soma(numero01, numero02){
    const resultado = numero01 + numero02

    return resultado
}







