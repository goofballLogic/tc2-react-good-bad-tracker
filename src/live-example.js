import React, { Component } from "react";
import { render } from "react-dom";
import { Menu } from "./index";
import { Scoring } from "./index";
import { generateMenu, goalsTemplate, generateScorees, scoreeTemplate } from "./live-example-data";

// https://tc2-react-good-bad-tracker-goofballlogic.c9users.io

class ScoringByGoal extends Component {
    
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
    
    render() {
        
        return <article className="score-by-goal">   
        
            <button onClick={ this.handleRegenerateClick.bind( this ) }>Regenerate data</button>
            <h1>Scoring by goal</h1>
            <h2>Sprint {this.state.sprint}: Top priorities</h2>
            <section>

                <Menu       items={ this.state.items } 
                            onChange={ this.handleChange.bind( this ) } 
                            chosen={ this.state.chosen }
                            template={ goalsTemplate } />
                <Scoring    target={ this.state.chosen }
                            scorees={ this.state.scorees }
                            handleChange={ selected => this.setState( { selected } ) } />
                
            </section>
            
        </article>;

    }
    
}

class ScoringByPerson extends Component {
    
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
    
    render() {
        
        return <article className="score-by-person">
            
            <button onClick={ this.handleRegenerateClick.bind( this ) }>Regenerate data</button>
            <h1>Score by person</h1>
            <h2>Team Yaknala: Sprint {this.state.sprint}</h2>
            <section>
            
                <Menu   items={ this.state.scorees }
                        onChange={ this.handleChange.bind( this ) }
                        chosen={ this.state.chosen }
                        template={ scoreeTemplate } />
                
            </section>
            
        </article>;

    }
    
}

const LiveExample = () => <div className="live-example">
    
    <ScoringByGoal />
    <hr />
    <ScoringByPerson />
    
</div>;

export const renderLiveExample = selector => 

    render( 
    
        <LiveExample />,
        document.querySelector( selector )
    
    );