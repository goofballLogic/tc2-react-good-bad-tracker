import React from "react";
import expand from "./expand";

let seed = Date.now();

const generateName = () => `menu-${seed}-${Math.random()}`;
const byScoreSum = ( a, b ) => ( ( asum, bsum ) => bsum - asum )( ( a.upScore || 0 ) + ( a.downScore || 0 ), ( b.upScore || 0 ) + ( b.downScore || 0 ) );
const noop = () => {};

const template = { 
    
    "div": true, 
    "key": "scorable",
    "className": "{key} choice-content",
    "items": [
    
        "title",
        "specifics",
        "measurement",
        {
            
            "key": "scores", 
            "items": [
                
                { 
                    
                    "key": "up",
                    "prop": "upScore",
                    "className": "score {key} {truthiness}"
                    
                },
                { 
                    "key": "down",
                    "prop": "downScore",
                    "className": "score {key} {truthiness}"
                    
                }
            
            ]
            
        }
        
    ]
    
};

export default ( { items, name = generateName(), onChange = noop, chosen } ) =>

    <section className="menu">
    
        <div className="choices">
        { items.slice( 0 ).sort( byScoreSum ).map( x => (

            <label className="choice" key={ x.id }>
            
                <input type="radio" checked={ !!( chosen && chosen.id === x.id ) } name={ name } value={ x.id } onChange={ e => onChange( e, x ) } />
                {expand( template, x )}
                
            </label>
            
        ) ) }
        </div>

    </section>;
