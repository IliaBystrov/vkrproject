import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import './style3.css'
import { ShablonApp } from './components/ShablonApp';


//Сюда надо передавать название опроса.
const pagetitle = "Название опpоса"
const block1 = document.getElementById("main_block")

//Отрисовка логотипа
const imgarea = document.getElementById("logo")
const Img = <img src={require('./images/logo.jpeg')} alt = "Logo" id = "logoImg"></img>
const rootimg = ReactDOMClient.createRoot(imgarea)
rootimg.render(Img)

//Отрисовка названия
const titlearea = document.getElementById("pagetitle")
const roottitle = ReactDOMClient.createRoot(titlearea)
roottitle.render(<h1>{pagetitle}</h1>)

//Отрисовка главной части
const root = ReactDOMClient.createRoot(block1)
root.render(<ShablonApp/>)