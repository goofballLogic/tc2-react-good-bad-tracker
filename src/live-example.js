import React, { Component } from "react";
import { render } from "react-dom";
import { Menu } from "./index";
import { Scoring } from "./index";
import { generateMenu, goalsTemplate, generateScorees, scoreeTemplate, goalsWithComponentsTemplate } from "./live-example-data";

const decorateMenu = x => x;

class ListAndEditGoals extends Component {
    
    constructor() {
        
        super();
        this.state = {
            
            items: generateMenu( 5 )

        };
        
    }
    
    handleChange( e, chosen ) {
        
        this.setState( { 
            
            chosen: chosen ? JSON.parse( JSON.stringify( chosen ) ) : chosen
            
        } );
        
    }
    
    handleSave( e, edited ) {
        
        const { items, chosen } = this.state;
        const newItems = chosen ? items.filter( item => item.id !== chosen.id ) : items;
        if ( chosen ) newItems.push( chosen );
        this.setState( { 
            
            items: newItems,
            chosen: undefined
            
        } );

    }
    
    handleArchive( e, { id, title } ) {
        
        const { items } = this.state;
        if ( window.confirm( `Please confirm you want to archive this item: ${title}` ) ) {
            
            this.setState( { 
                
                items: items.filter( x => x.id !== id )
                
            } );
            
        }
        
    }
    
    handleDelete( e, { id, title } ) {
        
        const { items } = this.state;
        if ( window.confirm( `Please confirm you want to delete this item: ${title}` ) ) {
            
            this.setState( { 
                
                items: items.filter( x => x.id !== id )
                
            } );
            
        }
        
    }
    
    handleAdd( e ) {
        
        e.preventDefault();
        const chosen = { id: Math.random() };
        this.setState( { chosen } );
        
    }
    
    render() {
        
        const { items } = this.state;
        return <article className="list-and-edit-goals">
        
            <h3>Click on a goal to edit</h3>
            <button onClick={ this.handleAdd.bind( this )}>Add</button>
            <Menu   items={ items } 
                    onChange={ this.handleChange.bind( this ) }
                    onSave={ this.handleSave.bind( this ) }
                    onArchive={ this.handleArchive.bind( this ) }
                    onDelete={ this.handleDelete.bind( this ) }
                    chosen={ this.state.chosen }
                    template={ goalsTemplate }
                    decorate={ decorateMenu }
                    texts = {{ choose: "Edit", done: "Cancel", save: "Save" }} /> 
            
        </article>;
        
    }
    
}

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
                            template={ goalsTemplate }
                            decorate={ decorateMenu } />
                <Scoring    target={ this.state.chosen }
                            scorees={ this.state.scorees }
                            handleChange={ selected => console.log( selected ) || this.setState( { selected } ) } />
                
                <h3>Selected</h3>
                <pre>{JSON.stringify(this.state.selected, null, 3 )}</pre>
                
            </section>
            
        </article>;

    }
    
}

const components = [ "Planning", "Execution", "Perception" ];

class ScoringByGoalAndComponent extends Component {
    
    constructor() {
        
        super();
        
        this.state = {
        
            sprint: 3,    
            items: generateMenu( 5, components ),
            scorees: generateScorees( 4 ),
            chosen: null
            
        };
        
    }

    handleRegenerateClick() {

        this.setState( {
            
            sprint: this.state.sprint + 1,
            items: generateMenu( this.state.items.length, components ),
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
        
        return <article className="score-by-goal-and-component">   
        
            <button onClick={ this.handleRegenerateClick.bind( this ) }>Regenerate data</button>
            <h1>Scoring by goal and component</h1>
            <h2>Sprint {this.state.sprint}: Top priorities</h2>
            <section>

                <Menu       items={ this.state.items } 
                            onChange={ this.handleChange.bind( this ) } 
                            chosen={ this.state.chosen }
                            template={ goalsWithComponentsTemplate }
                            decorate={ decorateMenu } />
                <Scoring    target={ this.state.chosen }
                            scorees={ this.state.scorees }
                            handleChange={ selected => console.log( selected ) || this.setState( { selected } ) } />
                
                <h3>Selected</h3>
                <pre>{JSON.stringify(this.state.selected, null, 3 )}</pre>
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
    <ScoringByGoalAndComponent />
    <hr />
    <ScoringByPerson />
    <hr />
    <ListAndEditGoals />
    
</div>;

export const renderLiveExample = selector => 

    render( 
    
        <LiveExample />,
        document.querySelector( selector )
    
    );