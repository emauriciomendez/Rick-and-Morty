const regexEmail=/[\w]+@[\w]+\.[\w]/
//^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/
const regexPassword=/[\d\w]{6,10}/
//^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/

export function validate(userData){
    let errors={};
    console.log('validando')
   // const regexEmail= new RegExp(/[\w]+@[\w]+\.[\w]/)
    if(!regexEmail.test(userData.username))errors.username='Debe ser un correo electrónico valido'
    else if(userData.username.length>35)errors.username='El usuario no puede ser mayor de 35 caracteres'
    else if(!userData.username){errors.username='No debe ser vacio el usuario'}
   //if(userData.username.length>5||!userData.username){errors.username='Debe ser un correo electrónico valido'}
    
   // const regexPassword= new RegExp(/[\d\w]{6,10}/)
    if(!userData.password)errors.password='El Password esta vacio';    
    else 
    if(userData.password.length<6 || userData.password.length>10){errors.password='Se requiere una longitud de 6 a 10 caracteres del password'; }
    else
     if(!regexPassword.test(userData.password)){errors.password='Se requiere un Password valido'; }
        return errors;
}