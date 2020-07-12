import React, { Component } from 'react'
import Logo from './../Logo/Logo';
import Wing from './../Wing/Wing';
import './css.css';
class Lipshead extends Component {
    render(){
        return ( 
        <div id="lipshead" opacity={1.0}>
            <Logo ></Logo>
            <Wing></Wing>  
        </div>
        );
    }
}
export default Lipshead