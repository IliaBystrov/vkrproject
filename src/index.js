import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import './style2.css'
import { App } from './components/App';

const pagetitle = "Главное меню"
const block = document.getElementById("main_block")

//Отрисовка логотипа
const imgarea = document.getElementById("logo")
const Img = <img src={require('./images/logo.jpeg')} alt = "Logo" id = "logoImg"></img>
const rootimg = ReactDOMClient.createRoot(imgarea)
rootimg.render(Img)

//Название
const titlearea = document.getElementById("pagetitle")
const roottitle = ReactDOMClient.createRoot(titlearea)
roottitle.render(<h1>{pagetitle}</h1>)

//Отрисовка главной части
const root = ReactDOMClient.createRoot(block)
root.render(<App/>)