function agir() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let idade = document.getElementById("idade").value

    if(nome === "" || sobrenome === "" || idade === "") {
        Resultado.innerHTML = "Preencha todos os campos"
        Resultado.style.color = "red"
        return false
    }

    Resultado.innerHTML = `Olá, meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`
    Resultado.style.color = "green"
}