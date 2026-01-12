function agir() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let idade = document.getElementById("idade").value
    let email = document.getElementById("email").value
    let cpf = document.getElementById("cpf").value

    if(nome === "" || sobrenome === "" || idade === "" || email === "" || cpf === "") {
        Resultado.innerHTML = "Preencha todos os campos"
        Resultado.style.color = "red"
        return false
    }

    if(idade < 18) {
        Resultado.innerHTML = "Acesso negado. Você precisa ter pelo menos 18 anos."
        Resultado.style.color = "red"
        return false
    }

    if(cpf.length !== 11) {
        Resultado.innerHTML = "CPF inválido"
        Resultado.style.color = "red"
        return false
    }

    Resultado.innerHTML = `Bem-vindo(a) ${nome}`
    Resultado.style.color = "green"
}
function carregar() {
    let data = new Date()
    let hora = data.getHours()
    //let hora = 18
    //let hora = 12
    if(hora >=0 && hora < 12) {
        document.body.style.backgroundColor = "#0b8bbaff";
        document.getElementById("saudacao").innerHTML = "Bom-dia"
    } else if(hora >=12 && hora < 18) {
        document.body.style.backgroundColor = "#e6e30dff";
        document.getElementById("saudacao").innerHTML = "Boa-tarde"
    } else {
        document.body.style.backgroundColor = "#0f0f22ff"
        document.getElementById("saudacao").innerHTML = "Boa-noite"
        document.getElementById("Nome-white").style.color = "white"
        document.getElementById("Sobrenome-white").style.color = "white"
        document.getElementById("Email-white").style.color = "white"
        document.getElementById("Idade-white").style.color = "white"
        document.getElementById("CPF-white").style.color = "white"
        document.getElementById("Formulario-white").style.color = "white"
        document.getElementById("p-white").style.color = "white"
        document.getElementById("label-white").style.color = "white"
    }
}