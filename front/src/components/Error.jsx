import React from "react";
const st ={color: 'white',
                background: 'gray'}
export default function Error(){
    return(
        <div style={st}>
            <h1>Error 404</h1>
            <h2>Route not found</h2>
        </div>
    )
}