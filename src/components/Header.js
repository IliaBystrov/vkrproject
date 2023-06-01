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
import { Component } from 'react';

export default class Header extends Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>

                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mr-autho'>
                            <Nav.Link href='/mainpage'>Главная</Nav.Link>
                            <Nav.Link href='/constructor'>Создать шаблон</Nav.Link>
                            <Nav.Link href='/results'>Результаты</Nav.Link>
                            <Nav.Link href='/edit'></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}