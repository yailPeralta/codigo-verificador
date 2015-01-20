/**
 * Created by Yail Anderson on 03/12/2014.
 */
var codBar = (function () {

    return {

        getCodigoDeVerificaccion : function (code) {

            var
                pares = 0,     //posiciones pares de numeros
                impares = 0,   //posiciones pinares de numeros
                codigo = null, //codigo numerico completo
                digito = null; //digito de verificacion
                len  = code.length; //tamaño del codigo numerico

            for(var i = 1; i <= len; i++){
                // si es numero par y si no es 0
                if(i % 2  == 0){
                    // sumo todos los pares
					var numeroPar;
                    pares +=  numeroPar = parseInt(code.substr(i-1, 1));
					console.log(i + " par " + numeroPar);
                // si es impar
                }else{
					var numeroImpar;		
                    // sumo todos los impares
                    impares += numeroImpar = parseInt(code.substr(i-1, 1));
					console.log(i + " impar " + numeroImpar);
                }
            }
			var imp = impares;

            var total = (impares * 3) + pares;

            //debug
			console.log("pares: " + pares);
			console.log("impares: " + imp);

            digito = 10 - (total % 10);

            //aprego el codigo verificador al final
            //codigo = code.toString().concat(digito);

            //devuelve el digito verificador
            // si es menor que 10 si no devuelve 0
            return (digito == 10) ? digito = 0 : digito;
        }
    };
    
})();