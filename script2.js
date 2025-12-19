function agir() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let idade = document.getElementById("idade").value

    document.getElementById("Resultado").innerHTML = `Olá, meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`
}