import React, { Component } from 'react';
import './Die.css';

const fontAwesome_API = "fas fa-dice-";

class Die extends Component {


    render() {
        
        let dieNum = fontAwesome_API + this.props.num;

        //adds CSS for shake animation
        if(this.props.shake === true) {
            dieNum += ' shake-die'
        } 

        return (
            <span className="Die-icon"> 
                <i className={dieNum}></i>
            </span>
        )
    }
}

export default Die;