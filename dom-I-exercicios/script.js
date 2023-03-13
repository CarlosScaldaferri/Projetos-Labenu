const frutas = ["laranja", "limão", "uva"];
document.getElementById("fruta-1").innerText = frutas[0]
document.getElementById("fruta-2").innerText = frutas[1]
document.getElementById("fruta-3").innerText = frutas[2]


document.getElementById("btnInsert").addEventListener("click", function(e) {
    e.preventDefault()
    document.getElementById("fruta-4").innerText = document.getElementById("inptNewFruit").value         
    frutas.push(document.getElementById("inptNewFruit").value)
})