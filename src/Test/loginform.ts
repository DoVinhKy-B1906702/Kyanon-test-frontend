import { User } from "../models";
export function validLoginForm(props: User) {
   
    const regEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    // at least a number, a special character, upper-case, lower-case
    const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#%])[A-Za-z\d!#%]{8,}$/;



    if (
            !regPassword.test(props.password) 
        ||  !regEmail.test(props.email) 
        ||  (props.email.length <= 0 && props.password.length <=0 )) 
    {
        return false;
    }
    
    return true
}