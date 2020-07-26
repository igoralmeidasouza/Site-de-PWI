document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
    );

document.querySelector("#mods").addEventListener("change", qtdemods)

document.querySelector("#Ferro").addEventListener("change", attpreco)
document.querySelector("#Ouro").addEventListener("change", attpreco)
document.querySelector("#RedStone").addEventListener("change", attpreco)
document.querySelector("#Esmeralda").addEventListener("change", attpreco)
document.querySelector("#Diamante").addEventListener("change", attpreco)

function qtdemods(){
    const qtdemods = document.querySelector("#mods").value
    document.querySelector("label[for=mods]").innerHTML = qtdemods*5
    attpreco()
}

function attpreco(){
    const Ferro = document.querySelector("#Ferro").checked
    const Ouro = document.querySelector("#Ouro").checked
    const RedStone = document.querySelector("#RedStone").checked
    const Esmeralda = document.querySelector("#Esmeralda").checked
    const Diamante = document.querySelector("#Diamante").checked
    const resultado = document.querySelector("#mods").value
    
    var champ = resultado*5;
    let total = champ*2;
    if (Ferro) total += 30;
    if (Ouro) total += 40;
    if (RedStone) total += 50;
    if (Esmeralda) total += 60;
    if (Diamante) total += 70;

    document.querySelector("#preco").innerHTML = `R$ ${total},00 mensal`
    
}