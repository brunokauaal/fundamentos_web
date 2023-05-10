
//console.log("Hello World!")

let nome = 'Bruno'

const sobrenome = 'Carvalho'

console.log(nome + " " + sobrenome)

nome = "Bruno Kauã"

console.log(nome)



let num1 = 5
let num2 = 5

console.log(num1 + num2)


function dividir(num1, num2) {
    if (num2 === 0) {
        return "Não é Possivel Dividir por zero"
    }
    return num1 / num2
}



let resultado = dividir(10, 0)
console.log(resultado)


const soma = (num1, num2) => num1 + num2

console.log(soma(20, 30))


function tabuada(num1, num2) {

    for (contador = 1; contador <= 10; contador++) {

        console.log(`${num1} x ${contador} = ${num1 * contador}`)
    }

}

tabuada(5)


const nomes = ["Guilherme", "Lais", "Jamile"]

nomes.forEach(nome => console.log(nome))

