$(document).ready(function(){
    $(".iniciar").click(function(){
        
       var  user = "patos";
       var password = "1234abc";
        
        
        var useringresado = $(".nombre").val();
        var passwordingresado = $(".pass").val();
        
        
        if(user == useringresado && password == passwordingresado){
            alert("Bienvenido pato");
            //window.open("../ola.html";"_self")
            window.location.replace("ola.html");
        }else{
            alert("intentelo nuevamente");
        }
        
    })
})