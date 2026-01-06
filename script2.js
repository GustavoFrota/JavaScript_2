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

    Resultado.innerHTML = "Acesso concedido."
    Resultado.style.color = "green"
}
function carregar() {
    let data = new Date()
    let hora = data.getHours()
    if(hora >=0 && hora < 12) {
        document.body.style.backgroundColor = "#0b8bbaff";
    } else if(hora >=12 && hora < 18) {
        document.body.style.backgroundColor = "#e6e30dff";
    } else {
        document.body.style.backgroundColor = "#2C2C54"
    }
}