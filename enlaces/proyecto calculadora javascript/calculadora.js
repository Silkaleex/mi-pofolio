'use srtict';

var d = document, 
    pantalla = d.getElementById( "pantalla" ),
    teclas = d.querySelectorAll( ".tecla span" ),
    ultOperacion = "",
    resultado = 0,
    principio = true,
    calc = true;

console.log( teclas[ 1 ].innerHTML );

function procesador( entrada ) {
    
    var val = pantalla.textContent; 
    //No se repite mas los puntos, se usa para valores decimales en caso dfe no encontrarme el . el valor sera -1
    if( entrada == "." && val.indexOf(".") > -1) return;
    
    if( entrada == "<" ) {
        //verifica valores negativos 
        if( val.length > 1 ) {
            val = val.substring( 0, val.lenght - 1 );
            pantalla.textContent = val;
        } else {
            pantalla.textContent = "0";
            principio = 1;
            calc = 1;
        }
        
    } else {
        
        if( entrada == "C" ) {
            
            pantalla.textContent = "0";
            resultado = 0;
            principio = true;
            calc = true;
            
        } else {
            //En consola me pone todos los numeros que vamos poniendo
            console.log( val + entrada );
            
            if( principio ) {
                
                val = "";
                pantalla.textContent = val;
                principio = false;
                
            }
            
            if( entrada == "+" ||
                entrada == "-" ||
                entrada == "/" ||
                entrada == "X" 
              ) {
                
                principio = true;
                
                if( calc ) {
                    //optenemos el resultado final de la operacion
                    resultado = val;
                    calc = false;
                    
                } else {
//calculador modifica internamente esta variable que la modificar en linea(modo ejecucion)nuevamente utiliza la variable resultado para pasarle el valor de texto content me dara el resultado final.
                     calculador( val );
                     pantalla.textContent = resultado;
                }
                
                ultOperacion = entrada;
                
            } else {
                
                if( entrada == "=" ) {
                    
                    
                    calculador( val );
                    
                    pantalla.textContent =  resultado;
                    
                    calc = true;
                    
                    principio = true;
                    
                } else { 
                    //Ingresa valores de las teclas, uno al lado del otro de la derecha
                    pantalla.textContent = val + entrada;
              }
            }
         }
       }   
     }
function calculador ( val ) {
//la palabra reservada val esta variable fue creada por fuera y se llama en modo global, se puede modificar y podemos acceder a su valor.
    val = parseFloat( val );
    
    resultado = parseFloat( resultado );
    
    switch( ultOperacion ) {
            
        case "+":
            resultado += val;
            break;
            
        case "-":
            resultado -= val;
            break;
            
        case "X":
            resultado *= val;
            break;
            
        case "/":
            resultado /= val;
            break;
    }
    
}
 
teclas.forEach( function( e ){
    
    var entrada = e.textContent;
    
   e.addEventListener( "click", function(){
       
       var entrada = this.textContent;
       
       if ( entrada != "" ){
           
           procesador( entrada );
       }
       });     
    });


