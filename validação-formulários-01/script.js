// Função mostrar e ocultar campo
function mostrarPopup(input, label){
    input.addEventListener("focus", ()=> {
        label.classList.add("required-popup");
});
    input.addEventListener("blur", ()=> {
        label.classList.remove("required-popup");
});
}

// Função validar valor do input correto

function validarInputIncorreto(input, helper){
    input.classList.remove("correct")
    input.classList.add("error")
    helper.classList.add("visible")
}

function validarInputCorreto(input, helper){
    input.classList.add("correct")
    input.classList.remove("error")
    helper.classList.remove("visible")
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
        // usernameInput.classList.remove("correct")
        // usernameInput.classList.add("error")
        // usernameHelper.classList.add("visible")
        validarInputIncorreto(usernameInput, usernameHelper)
        usernameHelper.innerText = "Seu username deve ter mais que 3 caracteres"
        inputsCorretos.username = false;
    } else {
        // usernameInput.classList.add("correct")
        // usernameInput.classList.remove("error")
        // usernameHelper.classList.remove("visible")
        validarInputCorreto(usernameInput, usernameHelper)
        inputsCorretos.username = true;
    }
});

// --------------- VALIDAÇÃO EMAIL ------------- //

let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")

emailInput.addEventListener("change", (e)=>{
    let valor = e.target.value;
    if(valor.includes("@") && valor.includes(".com")){
        // emailInput.classList.add("correct")
        // emailInput.classList.remove("error")
        // emailHelper.classList.remove("visible")
        validarInputCorreto(emailInput, emailHelper)
        inputsCorretos.email = true;
    } else {
        // emailInput.classList.remove("correct")
        // emailInput.classList.add("error")
        // emailHelper.classList.add("visible")
        validarInputIncorreto(emailInput, emailHelper)
        emailHelper.innerText = "Email inválido///"
        inputsCorretos.email = false;
    }
});

mostrarPopup(emailInput, emailLabel)


// --------------- VALIDAÇÃO SENHA ------------- //

let senhaInput = document.getElementById("senha")
let senhaLabel = document.querySelector('label[for="senha"]')
let senhaHelper = document.getElementById("senha-helper")

mostrarPopup(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (e)=>{
    let valor = e.target.value;
    if( valor == ""){
        validarInputIncorreto(senhaInput, senhaHelper)
        senhaHelper.innerText = "O campo de senha não pode ficar vazio";
        inputsCorretos.senha = false;
    } else {
        validarInputCorreto(senhaInput, senhaHelper)
        inputsCorretos.senha = true;
    }
});


// --------------- VALIDAÇÃO confirma-senha ------------- //

let confirmaSenhaInput = document.getElementById("confirma-senha")
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]')
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper")

mostrarPopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("blur", (e)=>{
    let valor = e.target.value;
    if (valor == senhaInput.value){
        validarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
        inputsCorretos.confirmaSenha = true;
    } else {
        validarInputIncorreto(confirmaSenhaInput,confirmaSenhaHelper)
        confirmaSenhaHelper.innerText = "Os campos precisam ser iguais"
        inputsCorretos.confirmaSenha = false;
    }
});


// ------------------ Evitar envio do formulário ------------------ //

let btnSubmit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
    username: false,
    email: false,
    senha: false,
    confirmaSenha: false
}

btnSubmit.addEventListener("click", (e)=>{
    if(inputsCorretos.username == false || 
        inputsCorretos.email == false ||
        inputsCorretos.senha == false ||
        inputsCorretos.confirmaSenha == false){
            e.preventDefault()
            alert("Os campos obrigatórios precisam ser preenchidos corretamente.")
    } else {
        alert("Formulário enviado com sucesso")
    }
});