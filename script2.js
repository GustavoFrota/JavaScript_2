function agir() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value

    document.getElementById("sultado").innerHTML = `Meu nome é ${nome} ${sobrenome}`
}