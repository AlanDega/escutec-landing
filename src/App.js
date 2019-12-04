import React from 'react';
import Particles from 'react-particles-js';
import Text from './Text'
import Nav from './Nav'
import './App.css'


function App() {

 

  return (
    <>
    <Nav />
    <div className="dynamicText">
      <Text />
      </div>

    <Particles 
      canvasClassName="particleBG"
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
             
            /> 
    </>
  );
}

export default App;
