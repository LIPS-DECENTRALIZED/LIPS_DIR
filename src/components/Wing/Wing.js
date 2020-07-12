import React, { Component } from 'react'
import './css.css';
class Wing extends Component {
    render(){
        return (<div id="login">
            <div id="metamask"><img id="metamask_logo" src="http://hivemuse.com/lips/2/metamask.png" alt="metamask" onClick={enable}/></div>
            <div className="lips_menu" id="lips_account"  onClick={jump}><div id="lips_account_address"></div></div>
            <div id="lips_search_panel"><img id="lips_search_icon" src="./search_red.png" onClick={search}/><input type="text" id="lips_search_field"></input></div>
        </div>);
    }
}

function enable(){
    window.ethereum.enable().then(function (accounts) {
       console.log(accounts[0]);
       document.getElementById('metamask').style.display="none";
       document.getElementById('lips_account').style.display="block";
       let res = accounts[0].substring(0, 6)+"..."+accounts[0].substring(38);
       document.getElementById("lips_account_address").innerHTML = res;
       document.getElementById("lips_account_address").setAttribute("jump", accounts[0])
    });
  }

  function jump(){
    window.open("?addr="+document.getElementById("lips_account_address").getAttribute("jump"))
  }

  function search(){
    window.open("?addr="+document.getElementById("lips_search_field").value)
  }


export default Wing