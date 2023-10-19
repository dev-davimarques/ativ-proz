// Função mostrar e ocultar campo
function mostrarPopup(input, label){
    input.addEventListener("focus", ()=> {
        label.classList.add("required-popup");
});
    input.addEventListener("blur", ()=> {
        label.classList.remove("required-popup");
});
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

mostrarPopup(usernameInput, usernameLabel)

// // Mostrar popup de campo obrigatório
// usernameInput.addEventListener("focus", ()=> {
//     usernameLabel.classList.add("required-popup");
// });

// // Ocultar popup de campo obrigatório
// usernameInput.addEventListener("blur", ()=> {
//     usernameLabel.classList.remove("required-popup");
// });

// Validar valor do input
usernameInput.addEventListener("change", (e)=>{
    let valor = e.target.value

    if(valor.length < 4){
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.innerText = "Seu username deve ter mais que 3 caracteres"
        usernameHelper.classList.add("visible")
    } else {
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
        usernameInput.classList.remove("error")
    }
});

// --------------- VALIDAÇÃO EMAIL

let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")

emailInput.addEventListener("change", (e)=>{
    let valor = e.target.value;
    if(valor.includes("@") && valor.includes(".com")){
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")
    } else {
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.classList.add("visible")
        emailHelper.innerText = "Email inválido///"
    }
});

mostrarPopup(emailInput, emailLabel)