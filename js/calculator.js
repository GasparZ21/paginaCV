let aux = 0;

var user = document.getElementById("direction"); {
  
    resi = 0.21,
    indus = 0.27
};
var zone = document.getElementById("sector").value; {

    distritoCentro = 5.80,
    distritoSur = 5.40,
    distritoOeste = 5.35,
    distritoNorte = 5.60
};


const price = 102;

function calculateKwh(){
    validate();
    var zone = document.getElementById("sector").value;
    var kwh = document.getElementById('kwh').value;
    
    
    if(document.getElementById('residencial').checked) {
        if(zone == "disCentro"){
            aux = price + (kwh * distritoCentro) * (1 + resi);
        }
        if(zone == "disSur"){
            aux = price + (kwh * distritoSur) * (1 + resi);
        }
        if(zone == "disOeste"){
            aux = price + (kwh * distritoOeste) * (1 + resi);
        }
        if(zone == "disNorte"){
            aux = price + (kwh * distritoNorte) * (1 + resi);
        }
    }else{
       
            if(zone == "disCentro"){
                aux = price + (kwh * distritoCentro) * (1 + indus);
            }
            if(zone == "disSur"){
                aux = price + (kwh * distritoSur) * (1 + indus);
            }
            if(zone == "disOeste"){
                aux = price + (kwh * distritoOeste) * (1 + indus);
            }
            if(zone == "disNorte"){
                aux = price + (kwh * distritoNorte) * (1 + indus);
            }
    }
       showText();    
}

function showText(){
    document.getElementById('show').style.display = 'block';
}


function validate(){
    if (!(document.getElementById("residencial").checked) && (!(document.getElementById("industrial").checked))) {
        alert("Por favor marque uno de los campos");
        return;
    }
    if ((document.getElementById("residencial").checked) && (document.getElementById("industrial").checked)) {
        alert('Por favor seleccione unicamente una opcion');
        return document.getElementById('result').innerHTML = 'Error';
    }
     

    if (document.getElementById('sector').value == 'default') {
        alert("Por favor seleccione un distrito");
        return;
    }

    if(document.getElementById("kwh").value <= 0 || document.getElementById('kwh') == ""){
        alert("Por favor seleecione un valor valido");
        return;
    }

    return document.getElementById('result').innerHTML = aux;

}