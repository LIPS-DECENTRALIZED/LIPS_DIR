import React, { Component } from 'react'
import './css.css';
class Logo extends Component {
    render(){
        return (
        <div id="lips" opacity="1" >
            <img id="lips_logo" src="http://hivemuse.com/lips/2/lips_clear.png" alt="Lips" />
            <div id="lips_menu">
                <div className="menu_row">
                <div><a className="lips_menu_link lips_dir_button float_left" href="https://docs.google.com/spreadsheets/d/14qZ6a_QVbq92lMGlZLp_qqwK-lCF6xYEKQ985dIysUI/edit?usp=sharing" target="_blank">DFO<br></br><img className="lips_dir_icon" src="./ghost.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="https://medium.com/@lips_social" target="_blank">CONCEPTS<br></br><img className="lips_dir_icon" src="./light_bulb.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="" target="_blank">DOCS<br></br><img className="lips_dir_icon" src="./memory.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="https://docs.google.com/spreadsheets/d/14qZ6a_QVbq92lMGlZLp_qqwK-lCF6xYEKQ985dIysUI/edit?usp=sharing" target="_blank">FLOW<br></br><img className="lips_dir_icon" src="./ufo.png"/></a></div>
                </div>
                <div className="menu_row">
                <div><a className="lips_menu_link lips_dir_button float_left" href="https://docs.google.com/spreadsheets/d/14qZ6a_QVbq92lMGlZLp_qqwK-lCF6xYEKQ985dIysUI/edit?usp=sharing" target="_blank">FACTORY<br></br><img className="lips_dir_icon" src="./factory.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_left" href="https://docs.google.com/spreadsheets/d/14qZ6a_QVbq92lMGlZLp_qqwK-lCF6xYEKQ985dIysUI/edit?usp=sharing" target="_blank">BUILDER<br></br><img className="lips_dir_icon" src="./robot.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="https://github.com/maxxflyer/lips/blob/master/README.md" target="_blank">GITHUB<br></br><img className="lips_dir_icon" src="./lips_github.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="" target="_blank">TWITTER<br></br><img className="lips_dir_icon" src="./twitter.png"/></a></div>
                  <div><a className="lips_menu_link lips_dir_button float_right" href="" target="_blank">BLOG<br></br><img className="lips_dir_icon" src="./boiler.png"/></a></div>
                </div>
            </div>
        </div>
        );
    }
}
export default Logo