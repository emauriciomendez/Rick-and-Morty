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

export default function Nav({onSearch}){
    return (<div className={st.container}> 
                <ul className={st.menu}>
                    <li>  <h2 className={st.h2}>Rick and Morty</h2></li>
                    <li ><NavLink to='/home' className={st.li_s} >Home </NavLink></li>
                    <li ><NavLink to='/about' className={st.li_s}>About </NavLink></li>
                    <li>
                        <Nav1>           
                           <SearchBar  onSearch={onSearch}  />
                        </Nav1>
                    </li>
                </ul>

            </div>
   
    );
}