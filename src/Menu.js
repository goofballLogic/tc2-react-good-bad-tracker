import React from "react";
import expand from "./expand";

let seed = Date.now();

const generateName = () => `menu-${seed}-${Math.random()}`;
const byScoreSum = ( a, b ) => ( ( asum, bsum ) => bsum - asum )( ( a.upScore || 0 ) + ( a.downScore || 0 ), ( b.upScore || 0 ) + ( b.downScore || 0 ) );
const noop = () => {};

export default ( { items, name = generateName(), onChange = noop, chosen, template } ) => <section className={ `menu ${chosen ? "chosen" : ""}` }>
    
    <div className="choices">
    { items.slice( 0 ).sort( byScoreSum ).map( x => (

        <label className="choice" key={ x.id }>
        
            <input type="radio" checked={ !!( chosen && chosen.id === x.id ) } name={ name } value={ x.id } onChange={ e => onChange( e, x ) } />
            <div className="choice-content">

                {expand( template, x )}
                <button mode="button" className="choose" onClick={e => onChange( e, x )}>Choose</button>
                <button mode="button" className="cancel" onClick={e => onChange( e, undefined )}>Done</button>
                
            </div>
            
        </label>
        
    ) ) }
    </div>

</section>;
