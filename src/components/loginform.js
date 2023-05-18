import React from 'react'

class LoginItems extends React.Component{
    render(){
        return(
            <div className = "group">
                <h1>Логин</h1>
                <input type='text' id = "InLogin" placeholder = {"Введите имя пользоателя"}></input>
                <h1>Пароль</h1>
                <div className="password">
                    <input type='password' id = "InPassword" placeholder = {"Введите пароль"}></input>
                    <a href="#" id = "eye" className="password-control" onClick={this.show_hide_password}></a>
                </div>
                <button id ="LoginButton" onClick={this.loginclick}>Войти</button>
            </div>
        )
    }
    show_hide_password(){
        var input = document.getElementById('InPassword');
        var eye = document.getElementById('eye');
        if (input.getAttribute('type') == 'password') {
            eye.classList.add('view');
            input.setAttribute('type', 'text');
        } else {
            eye.classList.remove('view');
            input.setAttribute('type', 'password');
        }
        return false;
    }
    //Получаем логин и пароль
    loginclick(){
    let login = document.getElementById("InLogin").value;
    let pass = document.getElementById("InPassword").value;
    if((login === "") || (pass === "")){
        alert("Поля для ввода логина и пароля не заполнены!");
        return;
    }
    console.log(login, pass);
    document.getElementById("InPassword").value = '';
    }
}

export default LoginItems