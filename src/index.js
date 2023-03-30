import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import './style2.css'
import MainButtoms from './components/mainbuttons';
import MainPanel from './components/mainpanel';

const pagetitle = "Main menu"
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
root.render(<MainButtoms 
    image1={require("./images/arrow.png")}  
    image2={require("./images/search.png")}
    cardim1={require("./images/copy.png")}
    cardim2={require("./images/link.png")}
    cardim3={require("./images/setings.png")}
    cardim4={require("./images/delete.png")}
    />)

//Paste MainPanel
const root2 = ReactDOMClient.createRoot(block2)
root2.render(<MainPanel 
    image_add_task={require("./images/plus.png")}
    image_delete_task={require("./images/close.png")}
    />)