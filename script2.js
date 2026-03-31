function agir() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let idade = document.getElementById("idade").value
    let email = document.getElementById("email").value
    let cpf = document.getElementById("cpf").value
    let masculino = document.getElementById("G-masculino").checked
    let feminino = document.getElementById("G-feminino").checked

    if(nome === "") {
        Resultado.innerHTML = "O campo nome é obrigatório!"
        Resultado.style.color = "red"
        return false
    }

    if(sobrenome === "") {
        Resultado.innerHTML = "O campo sobrenome é obrigatório!"
        Resultado.style.color = "red"
        return false
    }

    if(email === "") {
        Resultado.innerHTML = "O campo email é obrigatório!"
        Resultado.style.color = "red"
        return false
    }

    if(idade === "") {
        Resultado.innerHTML = "O campo idade é obrigatório!"
        Resultado.style.color = "red"
        return false
    }

    if(cpf === "") {
        Resultado.innerHTML = "O campo CPF é obrigatório!"
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

    if(masculino) {
        Resultado.innerHTML = `Seja bem-vindo ${nome}`
        Resultado.style.color = "green"
        genero_selecionado.innerHTML = "Seu gênero é masculino"
        genero_selecionado.style.color = "blue"
    } else if(feminino) {
        Resultado.innerHTML = `Seja bem-vinda ${nome}`
        Resultado.style.color = "green"
        genero_selecionado.innerHTML = "Seu gênero é feminino"
        genero_selecionado.style.color = "pink"
    } else {
        Resultado.innerHTML = `Seja bem-vindo(a) ${nome}`
        Resultado.style.color = "green"
        genero_selecionado.innerHTML = "Seu gênero é outro"
        genero_selecionado.style.color = "white"
    }

    console.log("Criando usuário...")
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("Idade:", idade);
    console.log("Email:", email);
    console.log("CPF:", cpf);
}
function carregar() {
    let data = new Date()
    let hora = data.getHours()
    //let hora = 18
    //let hora = 12
    if(hora >=0 && hora < 12) {
        document.body.style.background = 'linear-gradient(135deg, #287aa5, #28a259)'
        document.getElementById("saudacao").innerHTML = "Bom-dia"
    } else if(hora >=12 && hora < 18) {
        document.body.style.background = 'linear-gradient(135deg, #e5cf28, #e94f0d)'
        document.getElementById("saudacao").innerHTML = "Boa-tarde"
    } else {
        document.body.style.background = 'linear-gradient(135deg, #1d0d51, #103794c8 )'
        document.getElementById("saudacao").innerHTML = "Boa-noite"
    }
}
function limparformulario() {
    document.getElementById('meufor').reset()
    
    document.getElementById('Resultado').innerHTML = ' '
    document.getElementById('genero_selecionado').innerHTML = ' '
}