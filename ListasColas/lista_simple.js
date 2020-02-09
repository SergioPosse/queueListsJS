class Nodo{
    constructor (dato, siguiente){ //el nodo siempre tendra el dato y un siguiente
        this.dato = dato;          //si siguiente es null significa que es el ultimo nodo de la lista
        this.siguiente = siguiente;
    };    
};

class ListaSimple{
    constructor(){
        this.primero = null; //por defecto una instancia de lista simple tiene 0 elementos y el primero es null
        //this.primero va a contener un dato del tipo Nodo (osea con sus 2 atributos dato y siguiente)
        this.tamaño = 0;
        this.contador_clicks = 0; //SERA siempe un int comun y corriente, si size es 0  la lista esta vacia obvio
    };

        agregarInicio(valor){
        const el_nuevo_nodo = new Nodo(valor, null) //le paso null como "siguiente" porque todavia no se cual es

            if (this.primero === null)
                { 
                    this.primero = el_nuevo_nodo; //si no hay elementos entonces es el primero el nuevo
                }
            else
                {
                    el_nuevo_nodo.siguiente = this.primero;//el primero pasa a ser el siguiente del nuevo
                    this.primero = el_nuevo_nodo;//el nuevo es el primero ahora
                }
                this.tamaño++;
        };

        agregarFinal(valor){
            const el_nuevo_nodo = new Nodo(valor, null);
            if (this.primero === null) //si no hay nodos entonces el nuevo nodo es el primero
            { 
                this.primero = el_nuevo_nodo;
            }
            else
            {   
                let aux = this.primero;
                while(aux.siguiente){
                    aux = aux.siguiente;
                }
                aux.siguiente = el_nuevo_nodo; //cuando aux.siguiente no existe entonces ahi es donde colocalos el nuevo nodo
            }
            this.tamaño++;
        };


        //IMPRIMO LA SALIDA COMO CADENA QUE ENTIENDA HTML ASI ME INSERTA UNA TABLA ENTERA EN EL DIV "contenedorLista"
        imprimir(){
            let auxiliar = this.primero;
            var resultado = "<table class='centered bordered highlight'><thead><th>Dato</th><th>Sig</th></thead><tbody>";
            if (this.tamaño===0){
            }
            else{
                if(this.tamaño === 1){
                    resultado += "<tr><td>"+auxiliar.dato;
                    if (auxiliar.siguiente){
                        resultado +="</td><td>"+auxiliar.siguiente.dato+"</td></tr>";
                    }
                    else{
                        resultado +="</td><td>"+null+"</td></tr>";
                    }  
                }
                else{

                    while(auxiliar){
                        
                        resultado += "<tr><td>"+auxiliar.dato;
                        if (auxiliar.siguiente){
                            resultado +="</td><td>"+auxiliar.siguiente.dato+"</td></tr>";
                        }
                        else{
                            resultado +="</td><td>"+null+"</td></tr>";
                        }  
                        auxiliar = auxiliar.siguiente;
                    }
                }
            }
            resultado += "</tbody></table>";
            return resultado
        };


        obtenerTamaño(){
            return "Tamaño: "+this.tamaño;
        }

        eliminarPrimero(){
            if(this.primero === null){
                return alert("nada para eliminar porque esta vacia");
            };
            if(this.primero.siguiente === null){
                this.primero = null;
            }
            else{
                this.primero = this.primero.siguiente;
            }
            this.tamaño--;
        };

        eliminarUltimo(){ //SI QUEDA UN SOLO ELEMENTO COMO "THIS.PRIMERO" NO LO VA A ELIMINAR
            if(this.primero === null){
                return alert("nada para eliminar porque esta vacia"); //usando return es como break, sale de la funcion
                //sin evaluar nada mas
            }
            else{
                
                if(this.primero.siguiente===null){
                    this.primero=null;
                }
                else{
                    let aux = this.primero;
                    let aux2;

                    while(aux.siguiente){
                        aux2=aux;
                        aux=aux.siguiente;
                    }
                    aux2.siguiente=null;
                    aux=null;
                    //es lo mismo que hice en agregar al ultimo pero aca asignamos null en vez
                    //en vez de un nuevo nodo
                }       
            }
            this.tamaño--;
        };

        push_clicks(){
            this.contador_clicks++;
        }

        obtener_clicks(){
            return this.contador_clicks;
        }

        limpiar(){
            
            this.primero=null;
            this.tamaño=0;
        }

    ordenar(){
        this.push_clicks();
            let aux=null;
            let aux2=null;
            aux = this.primero;
     

            for(let t=0;t<this.tamaño-1;t++){
                aux2=aux.siguiente; //ERA CLAVE ASIGNAR ACA A aux2 Y NO FUERA DEL FOR
                        for(let n=0;n<this.tamaño-1-t;n++){
                            let temp=null;


                                if(this.obtener_clicks()%2 === 0){
                                    if((aux.dato<aux2.dato)&&(aux2)){
                                        temp=aux.dato;
                                        aux.dato = aux2.dato;
                                        aux2.dato = temp;
                                    }
                                }
                                else{
                                    if((aux.dato>aux2.dato)&&(aux2)){
                                        temp=aux.dato;
                                        aux.dato = aux2.dato;
                                        aux2.dato = temp;
                                    }
                                }
                                
     
                                if(aux2.siguiente){//ERA CLAVE HACER ESTE CONDICIONAL
                                    aux2=aux2.siguiente;
                                }
                        }//FIN DEL SEGUNDO FOR (n)
                aux=aux.siguiente;
            } //FIN DEL PRIMER FOR (t) 
    }

};


//NUEVA INSTANCIA DE LA CLASE LISTA
const lista = new ListaSimple();


//FUNCIONES DE LOS BOTONES
function agregar_inicio(){
    
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
                lista.agregarInicio(valor);
                let cadena = lista.imprimir();
                document.getElementById("contenedorLista").innerHTML = cadena;
                document.getElementById("tamañoLista").innerHTML = lista.obtenerTamaño();
                document.getElementById("numero").value="";
            }
    }
}

function agregar_final(){
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
        
            lista.agregarFinal(valor);
            let cadena = lista.imprimir();
            document.getElementById("contenedorLista").innerHTML = cadena;
            document.getElementById("tamañoLista").innerHTML = lista.obtenerTamaño();
            document.getElementById("numero").value="";
        }

    }

    
}
function eliminar_primero(){
    lista.eliminarPrimero();
    let cadena = lista.imprimir();
    document.getElementById("contenedorLista").innerHTML = cadena;
    document.getElementById("tamañoLista").innerHTML = lista.obtenerTamaño();
}

function eliminar_ultimo(){
    lista.eliminarUltimo();
    let cadena = lista.imprimir();
    document.getElementById("contenedorLista").innerHTML = cadena;
    document.getElementById("tamañoLista").innerHTML = lista.obtenerTamaño();
}

function ordenar (){
    lista.ordenar();
    let cadena = lista.imprimir();
    document.getElementById("contenedorLista").innerHTML = cadena;
    document.getElementById("tamañoLista").innerHTML = lista.obtenerTamaño();
    document.getElementById("clicks").innerHTML = lista.obtener_clicks();
}

function limpiarLista(){
    lista.limpiar();
    let cadena = lista.imprimir();
    document.getElementById("contenedorLista").innerHTML = cadena;
    document.getElementById("tamañoLista").innerHTML = lista.obtenerTamaño();
    document.getElementById("numero").value="";
}


//BOTONES
document.getElementById("tamañoLista").innerHTML = lista.obtenerTamaño();
document.getElementById("agregarInicio").addEventListener("click", agregar_inicio);
document.getElementById("agregarFinal").addEventListener("click", agregar_final);
document.getElementById("eliminarPrimero").addEventListener("click", eliminar_primero);
document.getElementById("eliminarUltimo").addEventListener("click", eliminar_ultimo);
document.getElementById("ordenar").addEventListener("click", ordenar);
document.getElementById("limpiarLista").addEventListener("click", limpiarLista);