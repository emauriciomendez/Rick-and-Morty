import React from 'react';
import SearchBar from './SearchBar.jsx'
import styled from 'styled-components';

const Nav1=styled.nav`
background: gray;
border: 2px solid ligthgray; 
display: flex;    
flex-direction: row-reverse; 

`

export default function Nav({onSearch}){
    return (<Nav1>
            <SearchBar 
            onSearch={onSearch}
            />

    </Nav1>
    );
}