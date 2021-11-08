const contenedor = document.getElementById("contenedor");
const textoNuevaEntrada = document.getElementById("textoNuevaEntrada");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const datos = new FormData(formulario);
    console.log(datos);
    console.log(datos.get("nuevoLi"));
    console.log(datos.getAll("nuevoLi"));
    agregarLi();
})

    const agregarLi = () => {
        if (textoNuevaEntrada.value.trim() == "") {
            alert("Error. Llenar todos los campos");
        }
        else {
            
            // Boton para crear las tareas
            const nuevoLi =  document.createElement("li");
            nuevoLi.innerText = textoNuevaEntrada.value;
            
            // Boton para Eliminar las tareas
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "X";
            deleteBtn.addEventListener("click", () => { eliminarLi(nuevoLi) });
            nuevoLi.appendChild(deleteBtn);
            contenedor.appendChild(nuevoLi);
            
            // Boton para editar las tareas
            const editInput = document.createElement("input");
            const editBtn = document.createElement("button");
            const addEdition = document.createElement("button");
            addEdition.innerText = "Añadir Edicion";
            editBtn.innerText = "Editar";
            nuevoLi.appendChild(editBtn);

            let stop = 1;

            editBtn.addEventListener("click", () => { 
                if(stop == 1){
                    
                    const editInput = document.createElement("input");
                    nuevoLi.appendChild(addEdition);
                    nuevoLi.appendChild(editInput);


                    addEdition.addEventListener("click", () => {
                        nuevoLi.innerText =editInput.value;
                        addEdition.nuevoLi;
                    });


                    stop=2;

                  
                }
                
            });
            
            
            textoNuevaEntrada.value = "";
        }
    }
    
    const eliminarLi = (li) => {
        li.remove();
    }
    

    const getter = (li) => {

        li.agregarLi();
    }
