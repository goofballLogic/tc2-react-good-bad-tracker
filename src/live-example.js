import React, { Component } from "react";
import { render } from "react-dom";
import { Menu } from "./index";
import { generateMenu } from "./live-example-data";

// https://tc2-react-good-bad-tracker-goofballlogic.c9users.io

class LiveExample extends Component {
    
    constructor() {
        
        super();
        
        this.state = {
        
            sprint: 3,    
            items: generateMenu( 5 )
            
        };
        
    }

    handleRegenerateClick() {

        this.setState( {
            
            sprint: this.state.sprint + 1,
            items: generateMenu( this.state.items.length )
            
        } );
        
    }
    
    render() {
        
        return (
            
            <article className="live-example">   
            
                <button onClick={ this.handleRegenerateClick.bind( this ) }>Regenerate data</button>
            
                <h2>Sprint {this.state.sprint}: Top priorities</h2>
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