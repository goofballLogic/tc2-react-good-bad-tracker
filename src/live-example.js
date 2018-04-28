import React, { Component } from "react";
import { render } from "react-dom";
import { Menu } from "./index";
import { Scoring } from "./index";
import { generateMenu, generateScorees } from "./live-example-data";

// https://tc2-react-good-bad-tracker-goofballlogic.c9users.io

class LiveExample extends Component {
    
    constructor() {
        
        super();
        
        this.state = {
        
            sprint: 3,    
            items: generateMenu( 5 ),
            scorees: generateScorees( 4 ),
            chosen: null
            
        };
        
    }

    handleRegenerateClick() {

        this.setState( {
            
            sprint: this.state.sprint + 1,
            items: generateMenu( this.state.items.length ),
            scorees: generateScorees( this.state.scorees.length ),
            chosen: null
            
        } );
        
    }
    
    handleChange( e, chosen ) {
        
        this.setState( { 
            
            chosen,
            selected: undefined
            
        } );
        
    }
    
    handleDeselect( e ) {
        
        this.setState( { 
            
            chosen: undefined,
            selected: undefined
            
        } );
        
    }
    
    render() {
        
        return <div className="live-example">

            <button onClick={ this.handleRegenerateClick.bind( this ) }>Regenerate data</button>
            <article className="score-by-goal">   
            
                <h1>Scoring by goal</h1>
                <h2>Sprint {this.state.sprint}: Top priorities</h2>
                <section className={ this.state.chosen ? "chosen" : "" }>

                    <Menu items={ this.state.items } onChange={ this.handleChange.bind( this ) } chosen={ this.state.chosen } />
                    <p><button className="deselect" onClick={ this.handleDeselect.bind( this ) }>cancel</button></p>
                    <Scoring target={ this.state.chosen } scorees={ this.state.scorees } handleChange={ selected => this.setState( { selected } ) } />
                    
                </section>
                
            </article>
            <article className="score-by-goal">
            
                <h1>Score by person</h1>
                
            </article>
        
        </div>;

    }
    
}

export const renderLiveExample = selector => 

    render( 
    
        <LiveExample />,
        document.querySelector( selector )
    
    );