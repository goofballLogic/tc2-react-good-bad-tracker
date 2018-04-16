import React, { Component } from "react";
import { render } from "react-dom";
import { Menu } from "./index";

class LiveExample extends Component {
    

    render() {
        
        return (
            
            <article className="live-example">   
            
                <h2>A menu</h2>
                <Menu />
                
            </article>
            
        );
        
    }
    
}

export const renderLiveExample = selector => 

    render( 
    
        <LiveExample />,
        document.querySelector( selector )
    
    );