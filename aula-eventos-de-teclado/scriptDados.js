const btnVoltar = document.getElementById("voltar");
// console.log(btnVoltar)

document.addEventListener("keyup", (e) => {
    // console.log(e);
    if(e.code == "Backspace"){
        btnVoltar.click();
    }
})