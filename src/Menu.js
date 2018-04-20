import React from "react";

let seed = Date.now();

const generateName = () => `menu-${seed}-${Math.random()}`;
    
const Score = ( { name, score, children } ) => <span className={ `score ${name} ${score ? "" : "none"}` } title={ name + " " + children }>

    <span className="score-text">{ children }</span>
    <span className="score-value">{ score }</span>
    
</span>;
                        
const byScoreSum = ( a, b ) => ( ( asum, bsum ) => console.log( bsum, asum ) || bsum - asum )( ( a.upScore || 0 ) + ( a.downScore || 0 ), ( b.upScore || 0 ) + ( b.downScore || 0 ) );

export default ( { items, name = generateName() } ) =>

    <section className="menu">
    
        <div className="choices">
        { items.slice( 0 ).sort( byScoreSum ).map( x => (

            <label className="choice" key={ x.id }>
            
                <input type="radio" name={ name } value={ x.id } />
                <div className="choice-content">
                    
                    <span className="title">{ x.title }</span>
                    <span className="specifics">{ x.specifics }</span>
                    <span className="measurement">{ x.measurement }</span>
                    <span className="scores">
                        
                        <Score name="up" score={ x.upScore }>Yes:</Score>
                        <Score name="down" score={ x.downScore }>No:</Score>
                        
                    </span>
                    
                </div>
                
            </label>
            
        ) ) }
        </div>

    </section>;
