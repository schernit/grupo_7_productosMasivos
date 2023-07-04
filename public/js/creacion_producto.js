window.onload = () => {

      let formulario = document.querySelector("form.signup-form");

      formulario.addEventListener("submit",function(event){});

      formulario.onsubmit = (event) => {
        
        let errores = [];

        //valido nombre
        let nombre = document.querySelector("#nombre");
        if (nombre.value == ""){            
          errores.push ("Se le debe asignar un nombre al producto");
        }

         //valido marca
        let marca = document.querySelector("#marca");
        if (marca.value == ""){            
          errores.push ("Se debe declarar la marca del producto");
        }

         //valido precio
        let precio = document.querySelector("#precio");
        if (precio.value == ""){            
          errores.push ("Se le debe asignar un precio al producto");
        }
     
        //valido descripcion
        let descripcion = document.querySelector("#descripcion");
        if (descripcion.value.length < 20){            
          errores.push ("La descripción debe contener al menos 20 caracteres");
        }
        

    if (errores.length>0){
          event.preventDefault();
          let ulErrores = document.querySelector(".errores ul");
          ulErrores.innerHTML = "<li></li>";
          errores.forEach(error => {
            ulErrores.innerHTML += "<li>"+ error+"</li>";
          })
        }
}  

    };
  
   
        