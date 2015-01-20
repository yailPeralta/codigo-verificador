/**
 * Created by Yail Anderson on 03/12/2014.
 */
var form = document.getElementById("form");
var showCode = document.getElementById("codigo-verificacion");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // obtengo el codigo ingresado en el input
    var code = e.target.codigo.value;

    if(code == ""){
        showCode.innerHTML = [
            '<div class="alert alert-warning alert-dismissable">',
            '<button type="button" class="close" data-dismiss="alert">&times;</button>',
            '<strong>¡Cuidado!</strong> ',
            'El campo no puede estar vacio!.</div>'
        ].join("\n");
        return;
    }else if(!/^([0-9])*$/.test(code)){
        showCode.innerHTML = [
            '<div class="alert alert-warning alert-dismissable">',
            '<button type="button" class="close" data-dismiss="alert">&times;</button>',
            '<strong>¡Cuidado!</strong> ',
            'El campo debe ser numerico!.</div>'
        ].join("\n");
        return;
    }else if(code.length > 39){
        showCode.innerHTML = [
            '<div class="alert alert-warning alert-dismissable">',
            '<button type="button" class="close" data-dismiss="alert">&times;</button>',
            '<strong>¡Cuidado!</strong> ',
            'El campo no debe ser mayor a 39 digitos!.</div>'
        ].join("\n");
        return;
    }

    //obtengo el codigo de verificacion
    var codigo = codBar.getCodigoDeVerificaccion(code);

    showCode.innerHTML = '<p class="bg-success"><strong>' + codigo + '</strong></p>';
});