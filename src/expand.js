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
    ti.div ? <div key={ keyOf( ti, d ) } className={ classNameOf( ti, d ) }>{content}</div> :
    <span key={ keyOf( ti, d ) } className={ classNameOf( ti, d ) }>{content}</span>;
    
const contentOf = ( ti, d ) => "items" in ti
    ? ti.items.map( tii => element( tii, d, contentOf( tii, d ) ) )
    : d
        ? d[ ti.prop ] 
        : null;
    
const contentsOf = ( ti, d ) => Array.isArray( d[ ti.prop ] )
    ? <ul>{d[ ti.prop ].map( di => 
    
        <li>{contentOf( ti, di )}</li>
    
    )}</ul>
    : contentOf( ti, d );

export default function expand( template, data ) {
    
    return asItems( template )
        .map( templateItem => element( 
            
            templateItem, 
            data, 
            contentsOf( templateItem, data )

        ) );
    
}
