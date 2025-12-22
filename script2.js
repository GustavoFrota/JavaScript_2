function somar() {
    let N1 = Number(document.getElementById("N1").value)
    let N2 =Number(document.getElementById("N2").value)
    let N3 = N1 + N2
    
    document.getElementById("Resultado").innerHTML =`A soma entre ${N1} + ${N2} é ${N3}`
}