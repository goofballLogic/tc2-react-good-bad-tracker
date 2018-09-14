import React from "react";

const asArray = x => Array.isArray( x ) ? x : [].concat( x || [] );

const asItems = is => asArray( is )
    .map( i => typeof i === "object" ? i : { "prop": i } )
    .map( i => "key" in i ? i : { ...i, key: i.prop } )
    .map( i => "className" in i ? i : { ...i, className: i.prop || i.key } )
    .map( i => "items" in i ? { ...i, items: asItems( i.items ) } : i );

const expandClassNameBit = ( classNameBit, ti, d ) => {
    
    switch( classNameBit ) {
        
        case "{prop}":
            return ti.prop;
        case "{key}":
            return ti.key;
        case "{truthiness}":
            return ( !!d[ ti.prop ] ).toString();
        default:
            return classNameBit;
            
    }
    
};

const expandClassName = ( className, ti, d ) => className
    .split( " " )
    .map( c => expandClassNameBit( c, ti, d ) )
    .join( " " );
    
const classNameOf = ( ti, d ) => ti.className
    ? expandClassName( ti.className, ti, d )
    : ti.propName;

const keyOf = ( ti, d ) => ti.keyProp
    ? d[ ti.keyProp ]
    : ti.key;
    
const element = ( ti, d, content ) => 
    ti.div 
        ? <div key={ keyOf( ti, d ) } className={ classNameOf( ti, d ) }>{content}</div> 
        : <span key={ keyOf( ti, d ) } className={ classNameOf( ti, d ) }>{content}</span>;

const dangerouslyUpdateObject =

    ( d, ti ) =>
    
        e =>
            
            d[ ti.prop ] = e.target.value;
        
const controlElement =

    ( ti, d, editable ) => {
        
        const editableType = ti.editable.type;
        switch( editableType ) {
            
            case "textarea":
                return <textarea name={ ti.prop } value={ d[ ti.prop ] } onChange={ dangerouslyUpdateObject( d, ti ) } />;
            case "numeric":
                return <input type="number" name={ ti.prop } value={ d[ ti.prop ] || "" } onChange={ dangerouslyUpdateObject( d, ti ) } />;
            default:
                return <input type="text" name={ ti.prop } value={ d[ ti.prop ] || "" } onChange={ dangerouslyUpdateObject( d, ti ) } />;
                
        }    
        
    };

            
const control =
    
    ( ti, d, editable ) =>
        
        <label>
        
            <span>{ ti.editable.label }</span>
            { controlElement( ti, d, editable ) }
                 
        </label>;
    
const contentOf = ( ti, d, editable ) => "items" in ti
    ? ti.items.map( tii => element( tii, d, contentOf( tii, d, editable ), editable ) )
    : ( editable && ti.editable )
        ? control( ti, d, editable )
        : d
            ? d[ ti.prop ] 
            : null;
    
const contentsOf = ( ti, d, editable ) => Array.isArray( d[ ti.prop ] )
    ? <ul>{d[ ti.prop ].map( ( di, diIndex ) => 
 
        <li key={ keyOf( ti, di ) }>{contentOf( ti, di, editable )}</li>
    
    )}</ul>
    : contentOf( ti, d, editable );

export default function expand( template, data, editable = false ) {
 
    return asItems( template )
        .map( templateItem => element( 
            
            templateItem, 
            data, 
            contentsOf( templateItem, data, editable )

        ) );
    
}
