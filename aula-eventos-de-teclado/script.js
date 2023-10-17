const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");

// document.addEventListener("mouseover",() =>{
//   navPerfil.style.display = "block";
// });

document.addEventListener("keyup",(e) => {
  console.log(e)
  
  if(navPerfil.style.display == "block"){
    if(e.code == 'Digit1'){
      linkPerfilDados.click()
    }  
  } else if(e.code == 'Digit1'){
    navPerfil.style.display = "block"
  }

});