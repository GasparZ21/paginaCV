const showHideNavbar=()=>{
    let navbar = document.querySelector("#hide");

    if(navbar.style.display != "none"){
        navbar.style.display = "none";
    }
    else{
        navbar.style.display = "block";
    }
}

const showHidePersonal = ()=>{
    let datos = document.querySelector("#datos");
    
    if(datos.style.display != "none"){
        datos.style.display = "none";
    }
    else{
        datos.style.display = "block";
    }
}

const showHideNavExperiencia = ()=>{
    let datos = document.querySelector('#experiencia');

    if(datos.style.display != "none"){
        datos.style.display = "none";
    }
    else{
        datos.style.display = "block";
    }
    
}

const showHideNavEstudios = ()=>{
    let datos = document.querySelector('#estudios');

    if(datos.style.display != "none"){
        datos.style.display = "none";
    }
    else{
        datos.style.display = "block";
    }    
}