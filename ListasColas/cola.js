class Cola{
    constructor(){
        this.coleccion={};
        this.frente=0;
        this.cola=0; //hace referencia a tail o end
    };

    encolar(valor){
        this.coleccion[this.cola]=valor;
        this.cola++;
    };

    desencolar(){
        if(this.frente === this.cola){
            alert("NADA PARA DESENCOLAR");
            return null;
        };

        const dato = this.coleccion[this.frente]; //elimino el primer valor que entro (FIFO)
        this.frente++; //ahora seria una eliminacion logica porque solo paso el punter de frente al valor siguiente
        //ya no se tiene en cuenta el valor
        return dato; //devuelvo el valor que salio
    };

    obtenerTamaño(){
        return this.cola - this.frente;
    };

    estaVacia(){
        if (this.cola - this.frente === 0){ //uso el metodo obtenerTamaño
            return true;
        }
        else{
            return false;
        };
    };

    peek(){
        if(this.cola - this.frente===0){ //uso el metodo estaVacia 
            return null;
        };
        return this.coleccion[this.frente]; //en frente tenemos el valor que va a salir proximamente de la cola
        //eso hace peek tomar el proximo por salir
    };

    imprimir(){

        var resultado = "<table class='centered bordered highlight'><thead><th>pos</th><th>Valor</th></thead><tbody>";

        for(let i=0; i < this.cola;i++){
            if(this.frente>i){
                resultado+="<tr bgcolor='red'><td>"+i+"</td><td>"+this.coleccion[i]+"</td></tr>";
            }
            else{
                resultado+="<tr><td>"+i+"</td><td>"+this.coleccion[i]+"</td></tr>";
            }
            
        }
        
        resultado += "</tbody></table>";

        return resultado
    };


    obtenerFrente(){
        return this.frente;
    }

    obtenerUltimo(){
        return this.cola;
    }

    limpiar(){
        this.frente=0;
        this.cola=0;
        this.coleccion={};

    }


};




const cola = new Cola();

function encolar(){
    var valor = parseInt(document.getElementById("numero").value);

   
            if (!/^([0-9])*$/.test(valor)) {
                alert("El valor " +valor+ " no es un número");
                document.getElementById("numero").value=null;
            }
             else
             {
                if(!valor){
                    alert("No escribiste nada");
                }
                else{
                    cola.encolar(valor);
                    let cadena = cola.imprimir();
                    document.getElementById("contenedorCola").innerHTML = cadena;
                    document.getElementById("frente").innerHTML = "Frente: "+cola.obtenerFrente();
                    document.getElementById("ultimo").innerHTML = "Tamaño: "+cola.obtenerUltimo()
                    document.getElementById("numero").value="";
                }
                      
            }
    
}

function desencolar(){
    cola.desencolar();
    let cadena = cola.imprimir();
    document.getElementById("contenedorCola").innerHTML = cadena;
    document.getElementById("frente").innerHTML = "Frente: "+cola.obtenerFrente();
    document.getElementById("ultimo").innerHTML = "Tamaño: "+cola.obtenerUltimo()
    document.getElementById("numero").value="";
}
function peek(){
    alert("El siguiente elemento en salir de la cola es: "+cola.peek());
}

function limpiarCola(){
    cola.limpiar();
    let cadena = cola.imprimir();
    document.getElementById("contenedorCola").innerHTML = cadena;
    document.getElementById("frente").innerHTML = "Frente: "+cola.obtenerFrente();
    document.getElementById("ultimo").innerHTML = "Ultimo: "+cola.obtenerUltimo()
    document.getElementById("numero").value="";
}

document.getElementById("encolar").addEventListener("click", encolar);
document.getElementById("desencolar").addEventListener("click", desencolar);
document.getElementById("peek").addEventListener("click", peek);
document.getElementById("limpiarCola").addEventListener("click", limpiarCola);