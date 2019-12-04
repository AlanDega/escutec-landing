import React, { Component } from 'react'
import ReactTextTransition, { presets } from "react-text-transition";
import './App.css';


const randomNumber = () => Math.floor(Math.random() * 9999999999 + 10000000000);

const texts = ["Divertida", "Creativa", "Colaborativa", "Dinámica", "Diferente" ];


export class Text extends Component {
    state = {
        number: randomNumber(),
        textIndex: 0,
        textFastIndex: 0,
        paragraphIndex: 0
      };
    
      componentDidMount() {
        setInterval(() => {
          this.setState({
            number: randomNumber(),
            textIndex: this.state.textIndex + 1,
            paragraphIndex: this.state.paragraphIndex + 1
          });
        }, 4000);
        setInterval(() => {
          this.setState({
            textFastIndex: this.state.textFastIndex + 1
          });
        }, 150);
      }
    render() {
        return (
            <>
            <div className="dynamicText">
            <h1>
            La educación con tecnología es
            <ReactTextTransition
              text={texts[this.state.textIndex % texts.length]}
              spring={presets.gentle}
              style={{ margin: "0 4px", }}
              inline
            />
            .
            </h1>
            </div>
          
            
            </>
        )
    }
}

export default Text
