import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import './style2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './components/App';
import { render } from '@testing-library/react';
import { Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom';
import { MainPanel } from './components/mainpanel';
import { MainButtoms } from './components/mainbuttons';
import {ShablonApp} from './components/ShablonApp';
import { Container, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Result } from './components/Result';

const pagetitle = "Главное меню"
const block = document.getElementById("header_2")
/*
//Название
const titlearea = document.getElementById("pagetitle")
const roottitle = ReactDOMClient.createRoot(titlearea)
roottitle.render(<h1>{pagetitle}</h1>)*/

//Отрисовка главной части
const root = ReactDOMClient.createRoot(block)
root.render(    
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
<Container>
    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='mr-autho'>
            <Nav.Link href='/'>Главная</Nav.Link>
            <Nav.Link href='/constructor'>Создать шаблон</Nav.Link>
            <Nav.Link href='/results'>Результаты</Nav.Link>
            <Nav.Link href='/work'>Опрос</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Container>
</Navbar>)

render(
    <>
    <Router>
        <Routes>
            <Route exact path="/" Component={MainButtoms}/>
            <Route exact path="/constructor" Component={MainPanel}/>
            <Route exact path="/results" Component={Result}/>
            <Route exact path="/work" Component={ShablonApp}/>
        </Routes>
    </Router>
    </>

);