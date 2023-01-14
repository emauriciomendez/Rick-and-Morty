import React from 'react';
import SearchBar from './SearchBar.jsx'
import styled from 'styled-components';
import {NavLink } from 'react-router-dom';
import st from './estilos/Nav.module.css'

const Nav1=styled.nav`

border: 2px solid ligthgray; 
display: flex;    
flex-direction: row-reverse; 

`

export default function Nav({onSearch, logout}){
    return (<div className={st.container}> 
                <ul className={st.menu}>
                    <li>  <h2 className={st.h2}>Rick and Morty</h2></li>
                    <li ><NavLink to='/home' className={({isActive}) => (isActive ? st.active:st.disabled)} >Home </NavLink></li>
                    <li ><NavLink to='/about' className={({isActive}) => (isActive ? st.active:st.disabled)}>About </NavLink></li>
                    <li>
                        <Nav1>           
                           <SearchBar  onSearch={onSearch} logout={logout} />
                        </Nav1>
                    </li>
                </ul>

            </div>
   
    );
}