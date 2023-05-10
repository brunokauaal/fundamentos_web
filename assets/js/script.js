const nome = document.querySelector("#nome")
const email = document.querySelector("#email")

const cep = document.querySelector("#cep")


let nomeOk = false;
let emailOk = false;

function validarNome() {

    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome muito curto"
        txtNome.Style.color = "red"
        nomeOk = false
    } else {
        txtNome.innerHTML = "✔"
        txtNome.Style.color = "green"
        nomeOk = true
    }

}


function validarEmailRegeEx() {
    let regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
    let txtEmail = document.querySelector("#txtEmail");
    let email = document.querySelector("#email");

    if (email.value.match(regex)) {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    } else {
        txtEmail.innerHTML = "✔";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}




function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
    } else {
        txtEmail.innerHTML = "✔";
        txtEmail.style.color = "green";
    }
}





function enviarFormulario() {
    if (nomeOk === true && emailOk === true) {
        alert(nome.value + ", Obrigado pela sua mensagem")
    } else {
        alert("Por favor prencha o formulario corretamente!")
    }

}



function consultarCep() {


    console.log(cep)
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    fetch(url)
        .then((response) => response.json())    //resposta e gurdada aqui
        .then((jsonbody) => {          /* converte para json e exibir*/
           document.getElementById("dados").innerHTML =
           jsonbody.logradouro + "\n" + jsonbody.bairro + "\n" + jsonbody.localidade + "\n" + jsonbody.uf
        }) //converta para json
        .catch((error) => {
            alert("CEP não encontrado!");  /*Se falhar vai da esse cath */
        })


}