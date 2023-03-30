import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './style.css'
import LoginItems from './components/loginform';

const pagetitle = "Регистрация"
const textlogin = "Логин"
const textpassword = "Пароль"
const area = document.getElementById("inputs")

//Paste IMG
const imgarea = document.getElementById("logo")
const Img = <img src={require('./images/logo.jpeg')} alt = "Logo" id = "logoImg"></img>
const rootimg = ReactDOMClient.createRoot(imgarea)
rootimg.render(Img)

//Paste Title
const titlearea = document.getElementById("pagetitle")
const roottitle = ReactDOMClient.createRoot(titlearea)
roottitle.render(<h1>{pagetitle}</h1>)

//Paste login items
const root = ReactDOMClient.createRoot(area)
root.render(<LoginItems />)