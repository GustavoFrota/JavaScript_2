function agir() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value

    document.getElementById("Resultado").innerHTML = `Olá, nome é ${nome} ${sobrenome}`
}