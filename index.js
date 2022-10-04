const boton = document.getElementById("btn");

boton.addEventListener("click", () => {
    console.log("Me diste click")
})

$(() => {
    $("#btn").click(() => {
        console.log("Hola, estoy utilizando jQuery");
    })
})