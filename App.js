
    let inicio=0;
    function eliminarContenido(textoEncriptado) 
    {

                 let rectangulo;

                if (window.innerWidth <= 800) {
                                    // Asigna el valor apropiado cuando el ancho es 800px o menor
                                    rectangulo = document.getElementById('rectangulotablet');
                                    
                 } 
                else {
                                   
                                    rectangulo = document.getElementById('rectanguloOriginal');
                                    console.log('hola');
                }
                rectangulo.innerHTML = `
    <section class="ContenidoR">
        <textarea class="gotica" readonly>${textoEncriptado}</textarea>
        <p class="Error" id="error3" style="color: red; display: none;">Por favor, ingresa solo letras minúsculas sin acentos, pero puedes usar puntos (.) y comas (,).</p>
        <button class="Botones" id="Copiar">Copiar</button>
    </section>
`;

                /*rectangulo.innerHTML = `
                        <section class=ContenidoR>
                        <textarea class="gotica" readonly>${textoEncriptado}</textarea>
                        <p class="Error id="error3" style="color: red; display: none;">Por favor, ingresa solo letras minúsculas sin acentos, pero puedes usar puntos (.) y comas (,).</p>
                        <button class="Botones" id="Copiar">Copiar</button>
                        </section>
                            `;       */     
                let boton1=rectangulo.querySelector("#Copiar").offsetHeight;
                if (window.innerWidth <= 800 && window.innerWidth>400) {
                                    rectangulo.style.height=(textobelHeight+4*boton1)+'px'; console.log('grande');
                }
                else if(window.innerWidth <= 400){rectangulo.style.height=(textobelHeight+4*boton1)+'px';}
                rectangulo.querySelector('.gotica').style.height=textobelHeight+'px';
                document.getElementById("Copiar").addEventListener("click", Copiartexto);
    }
    function Copiartexto()
    {
                            const textoGotica = document.querySelector(".gotica");

                            // Verifica si el párrafo existe
                            // Copia el texto al portapapeles
                            navigator.clipboard.writeText(textoGotica.textContent).then(() => {
                                        // Notifica al usuario que el texto fue copiado exitosamente
                                        alert("Texto copiado al portapapeles");
                                        })
                                        .catch(err => {
                                        // Notifica al usuario si hubo un error al copiar
                                        console.error("Error al copiar el texto: ", err);
                                        alert("Error al copiar el texto");
                                        });
                            
    }
        
    /*function restaurarContenido() {
            rectangulo.innerHTML = contenidoOriginal;
        }*/

    function limpiarCaja() 
    {
                    let input = document.getElementById("myInput");
                    input.style.height="4rem";
                    // Restablecer el valor del input a vacío
                    input.value = "";

                    // Restablecer el placeholder original
                    input.placeholder = "Ingresa tu texto aquí";
    }



    function AsignarTextoElemento(elemento,texto)
    {
                    let titulo=document.querySelector(elemento);
                    titulo.innerHTML=texto;
    }

            
    document.getElementById('myInput').addEventListener('focus', function() {this.placeholder = '';});
            
    function Encriptarpalabra() {
            let texto = document.getElementById('myInput').value;
            if (/^[a-z\s.,]+$/.test(texto)) 
            {
                                            let textoEncriptado = texto
                                            .replace(/e/g, "enter")
                                            .replace(/i/g, "imes")
                                            .replace(/a/g, "ai")
                                            .replace(/o/g, "ober")
                                            .replace(/u/g, "ufat");
                                            /*AsignarTextoElemento('#resultado',textoEncriptado);*/
                                            limpiarCaja();
                                            eliminarContenido(textoEncriptado);
                                            inicio=1;
                                            document.getElementById('error3').style.display = "none";  // Oculta la advertencia si no hay mayúsculas

            }
            else{
                    if(inicio==0 && window.innerWidth>=800)
                    {
                        AsignarTextoElemento('#error1',"Por favor, ingresa solo letras minúsculas sin acentos, pero puedes usar puntos (.) y comas (,).");
                        console.log('Error');}
                    else
                    {
                        if(inicio==0)
                        { AsignarTextoElemento('#error2',"Por favor, ingresa solo letras minúsculas sin acentos, pero puedes usar puntos (.) y comas (,).");}
                       if(inicio==1)
                        {
                            document.getElementById('error3').style.display = "block";  // Muestra la advertencia
                                    console.log('error mostrado con exito');
                               
                        }
                    }
            }
            
        }
        function Desencriptarpalabra (){
            let texto = document.getElementById('myInput').value;
            if (/^[a-z\s.,]+$/.test(texto)) {
            let textoEncriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

            /*AsignarTextoElemento('#resultado',textoEncriptado);*/
            limpiarCaja();

            eliminarContenido(textoEncriptado);
            }
            else{
                  /* AsignarTextoElemento('#resultado',"Por favor, ingresa solo letras minúsculas sin acentos, pero puedes usar puntos (.) y comas (,).");*/


            }
           

        }
        let textobelHeight;
    const textobel = document.getElementById('myInput');
    textobel.addEventListener("input",e=>{
        let scHeight=e.target.scrollHeight;
        console.log(scHeight);
        textobel.style.height="auto";
        textobel.style.height=`${scHeight}`+"px";
        textobelHeight=scHeight;
    });
   
        


                

            /*function Encriptarpalabra{
            }*/
    