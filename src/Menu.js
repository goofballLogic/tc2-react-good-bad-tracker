import React from "react";

let seed = Date.now();

const generateName = () => `menu-${seed}-${Math.random()}`;
    
export default ( { items, name = generateName() } ) =>

    <section className="menu">
    
        <div className="choices">
        { items.map( x => (

            <label className="choice" key={ x.id }>
            
                <input type="radio" name={ name } value={ x.id } />
                <span className="label-text">{ x.title }</span>
            
            </label>
            
        ) ) }
        </div>
        <div>
        
            Something else here
            
        </div>

    </section>;
