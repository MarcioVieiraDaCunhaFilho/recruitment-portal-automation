class loginPageElements{
    fieldUsername = () =>{
        return '[name="username"]'
    } 
    fieldPassword = () =>{
        return '[name="password"]'
    }
    buttomLogin = () =>{
        return 'button[type="submit"]'
    }
    buttomForgotPassword = () =>{
        return '[class="orangehrm-login-forgot"]'
    }

    headerHRM = () =>{
        return '[class="orangehrm-login-branding"]'
    }

    alertInvalidCredentials = () =>{
        return 'Invalid credentials'
    }

    alertRequiredField = () =>{
        return 'Required'
    }

    
}
export default loginPageElements;