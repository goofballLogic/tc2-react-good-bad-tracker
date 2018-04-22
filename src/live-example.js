import React, { Component } from "react";
import { render } from "react-dom";
import { Menu } from "./index";
import { Scoring } from "./index";
import { generateMenu } from "./live-example-data";

// https://tc2-react-good-bad-tracker-goofballlogic.c9users.io

class LiveExample extends Component {
    
    constructor() {
        
        super();
        
        this.state = {
        
            sprint: 3,    
            items: generateMenu( 5 ),
            chosen: null
            
        };
        
    }

    handleRegenerateClick() {

        this.setState( {
            
            sprint: this.state.sprint + 1,
            items: generateMenu( this.state.items.length ),
            chosen: null
            
        } );
        
    }
    
    handleChange( e, chosen ) {
        
        this.setState( { chosen } );
        
    }
    
    handleDeselect( e ) {
        
        this.setState( { chosen: undefined } );
        
    }
    
    render() {
        
        return (
            
            <article className="live-example">   
            
                <button onClick={ this.handleRegenerateClick.bind( this ) }>Regenerate data</button>
                <h2>Sprint {this.state.sprint}: Top priorities</h2>
                <section className={ this.state.chosen ? "chosen" : "" }>

                    <Menu items={ this.state.items } onChange={ this.handleChange.bind( this ) } chosen={ this.state.chosen } />
                    <button className="deselect" onClick={ this.handleDeselect.bind( this ) }>cancel</button>
                    <p>Chosen: { JSON.stringify( this.state.chosen ) }</p>
                    <Scoring target={ this.state.chosen } />
                    
                </section>
                
            </article>
            
        );
        
    }
    
}

export const renderLiveExample = selector => 

    render( 
    
        <LiveExample />,
        document.querySelector( selector )
    
    );