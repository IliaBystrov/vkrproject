import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import './style2.css'
import MainButtoms from './components/mainbuttons';
import { App } from './components/App';

const pagetitle = "Главное меню"
const block1 = document.getElementById("block1")
const block2 = document.getElementById("block2")

//Paste IMG
const imgarea = document.getElementById("logo")
const Img = <img src={require('./images/logo.jpeg')} alt = "Logo" id = "logoImg"></img>
const rootimg = ReactDOMClient.createRoot(imgarea)
rootimg.render(Img)

//Paste Title
const titlearea = document.getElementById("pagetitle")
const roottitle = ReactDOMClient.createRoot(titlearea)
roottitle.render(<h1>{pagetitle}</h1>)

//Paste MainButtons
const root = ReactDOMClient.createRoot(block1)
root.render(<MainButtoms/>)

//Paste MainPanel
const root2 = ReactDOMClient.createRoot(block2)
root2.render(<App/>)