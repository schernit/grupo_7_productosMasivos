window.onload = () => {

    let formulario = document.querySelector("form.login-form");

    formulario.addEventListener("submit",function(event){});

    formulario.onsubmit = (event) => {
      
      let errores = [];

      //valido email
       let email = document.querySelector("#email");
       
      let reg2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      console.log(reg2.test(email.value)); 
     
      if (email.value == ""){            
        errores.push ("Se debe completar el email");
      }  else if 
      (!reg2.test(email.value)){           
  errores.push ("Debe ingresar un email válido") }
     ; 

      //valido contraseña 
      let password = document.querySelector("#password");

      if (password.value == ""){            
        errores.push ("El campo contraseña no puede estar vacio");
      };

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