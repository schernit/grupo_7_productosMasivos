window.onload = () => {

      let formulario = document.querySelector("form.signup-form");

      formulario.addEventListener("submit",function(event){});

      formulario.onsubmit = (event) => {
        
        let errores = [];

        //valido nombre
        let nombre = document.querySelector("#nombre");
        if (nombre.value == ""){            
          errores.push ("el campo nombre está vacio");
        }

        if (errores.length>0){
          event.preventDefault();
          let ulErrores = document.querySelector(".errores ul");
          ulErrores.innerHTML = "<li></li>";
          errores.forEach(error => {
            ulErrores.innerHTML += "<li>"+error+"</li>";
          })
        }

      }  
  };
  
  