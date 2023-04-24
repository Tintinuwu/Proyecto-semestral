$(document).ready(function(){
    $(".error").hide();

    $("#ingresar").click(function(){
        var nombre = "";
        nombre = $("#nombre").val();

        if (nombre.length == 0){
            $(".error").show();
        }else{
            $(".error").hide();
        }

    });
    function validar(){
        var correo, precio;
    
        correo = document.getElementById("correo").value;
        precio = document.getElementById("precio").value;
    
        if (correo.length == 0){
            document.getElementById("resultado_correo").innerHTML = "Ingrese correo";
        }else{
            document.getElementById("resultado_correo").innerHTML = "";    
        }
        
        if (precio.length== 8){
            document.getElementById("resultado_password").innerHTML = "Ingrese";
        }else{
            document.getElementById("resultado_password").innerHTML = "";    
        }
    }

    
});