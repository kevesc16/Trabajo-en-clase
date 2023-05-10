function validarF (){
    var xrut=document.getElementById("rut").value;
    var nom=document.getElementById("Nombre").value;
    var apP= document.getElementById("ApellidoP").value;
    var apM= document.getElementById("ApellidoM").value;
    var xeda=document.getElementById("edad").value;
    var xcel=document.getElementById("numCel").value;   


    

    function isValidName(name) {
        return name.length >= 3 && name.length <= 20;
    }

    function isValidRut(rut) {
        return rut.length >= 9 && rut.length <= 10;
    }

    function isValidLastName(lastName) {
        return lastName.length >= 3 && lastName.length <= 20;
    }

    function isValidAge(age) {
        return age >= 18 && age <= 35;
    }

    function isValidPhoneNumber(phoneNumber) {
        return phoneNumber.length >= 9 && phoneNumber.length <= 12;
    }

    if (isValidName(nom) && isValidRut(xrut) && isValidLastName(apP) && isValidLastName(apM) && isValidAge(xeda) && isValidPhoneNumber(xcel)) {
        alert("Los datos ingresados son correctos!");
    } else {
        if (!isValidName(nom)) {
            alert("El nombre ingresado no es valido!");
        } else if (!isValidRut(xrut)) {
            alert("El rut ingresado no es valido!");
        } else if (!isValidLastName(apP)) {
            alert("Apellido paterno invalido!");
        } else if (!isValidLastName(apM)) {
            alert("Apellido materno invalido!");
        } else if (!isValidAge(xeda)) {
            alert("Edad fuera del rango!");
        } else if (!isValidPhoneNumber(xcel)) {
            alert("El número de telefono ingresado no es valido!");
        }
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

carta.value= "Mi nombre es "+ nom +" "+ apP +" "+ apM+","+"\n"+" tengo" +" "+ xeda +" "+ "años de edad y mi fecha de nacimiento es  "+ fecnac +"\n"+ 
". Mi género es "+ gen + ", soy "+ prof +" y mi motivación para postular es " + moti +"."
}