import React from "react";

export default ( { name, className, options, selected, handleChange } ) => <span className={ className ? `one-of ${className}` : "one-of" }>

    { options.map( ( { value, child } ) => <label key={value} className={ `one-of-option one-of-option-${value}` }>
    
        <input 
            type="radio" 
            name={name}
            value={value}
            checked={selected == value}
            onChange={ e => handleChange( e, value) }
            />
        <span className="content">{ child }</span>
    
    </label> ) }

</span>;
