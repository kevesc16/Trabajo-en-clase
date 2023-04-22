function validarF (){
var xrut=document.getElementById("rut").value;
var nom=document.getElementById("Nombre").value;
var apP= document.getElementById("ApellidoP").value;
var apM= document.getElementById("ApellidoM").value;
var xeda=document.getElementById("edad").value;
var xcel=document.getElementById("numCel").value;   

var largnom= nom.length;
var largrut=xrut.length;
var largapp=apP.length;
var largapm=apM.length;
var largcel= xcel.length;
var longitudMax=20 ;
var mensajeErr=[];



if (largnom >=3 && largnom <= 20 ) {
    if(largrut>=9 && largrut<=10){
        if(largapp >=3 && largapp <= 20 ){
            if(largapm >=3 && largapm <= 20 ){
                if(xeda>=18 && xeda<=35){
                    if(largcel>=9 && largcel<= 12){
                        alert("Los datos ingresados son correctos!");
                    }else{
                        alert("El número de telefono ingresado no es valido!");
                    }
                }else{
                    alert("Edad fuera del rango!");
                }
            }else{
                alert("Apellido materno invalido!");
            }
        }else{
            alert("Apellido paterno invalido!");
        }
    }else{
        alert("El rut ingersado no es valido!");
    }
}else{
    alert("El nombre ingresado no es valido!");
}

}

function crearC(){
    var nom=document.getElementById("Nombre").value;
    var apP= document.getElementById("ApellidoP").value;
    var apM= document.getElementById("ApellidoM").value;
    var xeda=document.getElementById("edad").value;
    var fecnac=document.getElementById("fecnac").value;
    var moti = document.getElementById("moti").value;
    var prof= document.getElementById("prof").value;
    var gen= document.getElementById("genero").value;
    var carta=document.getElementById("carta");

carta.value= "Mi nombre es "+ nom +" "+ apP +" "+ apM+","+"\n"+" tengo" + xeda + "años de edad y mi fecha de nacimiento es  "+ fecnac +"\n"+ 
". Mi género es "+ gen + ", soy "+ prof +" y mi motivación para postular es " + moti
}