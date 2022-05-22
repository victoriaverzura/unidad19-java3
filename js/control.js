
let form=document.querySelector('form');

form.addEventListener('submit',(event) =>
        {
            event.preventDefault();
            let nombre=document.querySelector('#usuario');
            let nombreclave=document.querySelector('#clave');
            
            if (!(nombre.value).includes('@',1))
                                    {
                let errorNombre = document.querySelector('#error-usuario');
                errorNombre.textContent="DEBE INCLUIR @"; 
                error=true;
                event.preventDefault();
                                    }      
    

            if (nombre.value == '')
            {
                let errorNombre = document.querySelector('#error-usuario');
                errorNombre.textContent="EL NOMBRE ES OBLIGATORIO"; 
                error=true;
                event.preventDefault();
            }

            if (nombreclave.value == '')
            {
                let errorNombreclave = document.querySelector('#error-clave');
                errorNombreclave.textContent="LA CLAVE ES OBLIGATORIA"; 
                error=true;
                event.preventDefault();
            }
            
            if(error == false){
            form.submit();}
                  
        }


)