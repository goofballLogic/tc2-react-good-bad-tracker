import React, { Component } from "react";
import { render } from "react-dom";
import { Menu } from "./index";
import { generateMenu } from "./live-example-data";

class LiveExample extends Component {
    
    constructor() {
        
        super();
        this.state = {
            
            items: generateMenu( 6 )
            
        };
        
    }

    handleRegenerateClick() {

        this.setState( {
            
            items: generateMenu( this.state.items.length )
            
        } );
        
    }
    
    render() {
        
        return (
            
            <article className="live-example">   
            
                <h2>A menu</h2>
                <button onClick={ this.handleRegenerateClick.bind( this ) }>Regenerate data</button>
                <Menu items={ this.state.items } />
                
            </article>
            
        );
        
    }
    
}

export const renderLiveExample = selector => 

    render( 
    
        <LiveExample />,
        document.querySelector( selector )
    
    );