import React from 'react'

class LoginItems extends React.Component{
    render(){
        return(
            <div className = "group">
                <h1>{textlogin}</h1>
                <input id = "InLogin" placeholder = {"Введите имя пользоателя"}></input>
                <h1>{textpassword}</h1>
                <input id = "InPassword" placeholder = {"Введите пароль"}></input>
                <button id ="LoginButton" onClick={loginclick}>Войти</button>
            </div>
        )
    }
    //Get login info
    loginclick = () => {
    let login = document.getElementById("InLogin").value;
    let pass = document.getElementById("InPassword").value;
    console.log(login, pass);
    document.getElementById("InPassword").value = '';
    }
}

export default LoginItems