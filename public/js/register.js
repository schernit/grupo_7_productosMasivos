window.onload = () => {

    let formulario = document.querySelector("form.registro");

    formulario.addEventListener("submit",function(event){});

    formulario.onsubmit = (event) => {
      
      let errores = [];

      //valido nombre
      let nombre = document.querySelector("#nombre");
      if (nombre.value == ""){            
        errores.push ("Se debe completar el nombre");
     }  else if 
            (nombre.value.length < 2){           
        errores.push ("El nombre debe contener al menos 2 caracteres");
            } 

     //valido apellido
      let apellido = document.querySelector("#apellido");
      if (apellido.value == ""){            
        errores.push ("Se debe completar el apellido");
      }  else if 
      (apellido.value.length < 2){           
  errores.push ("El apellido debe contener al menos 2 caracteres");
      } 

      //valido email
       let email = document.querySelector("#email");
       
      let reg2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      console.log(reg2.test(email.value)); 
     
      if (email.value == ""){            
        errores.push ("Se debe completar el email");
      }  else if 
      (!reg2.test(email.value)){           
  errores.push ("Debe ingresar un email válido");
      } 
     ; 

      //valido contraseña 
      let password = document.querySelector("#password");
      let password1 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

      if (password.value == ""){            
        errores.push ("El campo contraseña no puede estar vacio");
      } 
      else if (!password1.test(password.value)){            
        errores.push ("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.");
      }

  if (errores.length>0){
        event.preventDefault();
        let ulErrores = document.querySelector(".errores ul");
        ulErrores.innerHTML = "<li></li>";
        errores.forEach(error => {
          ulErrores.innerHTML += "<li>"+ error+"</li>";
        })
      }

    };
  


      
};