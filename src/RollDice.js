import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

const diceNumArray = ['one', 'two', 'three', 'four', 'five', 'six']

function randomDie() {
        return diceNumArray[Math.floor(Math.random() * diceNumArray.length)];
    }

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRolling: false,
            die1: randomDie(),
            die2: randomDie(),
            die3: randomDie(),
            die4: randomDie(),
            die5: randomDie(),
        }
        this.rollButton = this.rollButton.bind(this)
    }

    rollButton() {
        //disable button & apply CSS for shake 
        this.setState({isRolling:true});

        //change die faces 
        setTimeout(() => {
            this.setState({ 
                die1: randomDie(),
                die2: randomDie(),
                die3: randomDie(),
                die4: randomDie(),
                die5: randomDie(),
            })
        }, 100)

        //enable the roll button on a timed delay
        setTimeout(() => {
            this.setState({isRolling:false})}, 1000);
        
    }

    render() {
        
        return (
            <div>
                <div className="RollDice-wrapper">
                    <Die num={this.state.die1} shake={this.state.isRolling}/>
                    <Die num={this.state.die2} shake={this.state.isRolling}/>
                    <Die num={this.state.die3} shake={this.state.isRolling}/>
                    <Die num={this.state.die4} shake={this.state.isRolling}/>
                    <Die num={this.state.die5} shake={this.state.isRolling}/>
                </div>
                <div>
                    <button disabled={this.state.isRolling} onClick={this.rollButton} className="RollDice-button">
                        {this.state.isRolling === true ? 'Rolling...' : 'Roll Dice!'}
                    </button>
                </div>              
            </div>
        )
    }
}

export default RollDice;