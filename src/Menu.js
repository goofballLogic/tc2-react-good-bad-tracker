import React from "react";
import expand from "./expand";

let seed = Date.now();

const generateName = () => `menu-${seed}-${Math.random()}`;
const byScoreSum = ( a, b ) => ( ( asum, bsum ) => bsum - asum )( ( a.upScore || 0 ) + ( a.downScore || 0 ), ( b.upScore || 0 ) + ( b.downScore || 0 ) );
const noop = () => {};
const thru = x => x;

const defaultTexts = {
    
    choose: "Choose",
    done: "Done",
    save: "Save",
    delete: "Delete",
    archive: "Archive"
    
};

const MenuItem =

    ( { decorate, chosen, item, name, template, onChange, texts, onDelete, onArchive } ) => 
    
        <label className={decorate( "choice" )}>
                
            <input type="radio" checked={ !!( chosen && chosen.id === item.id ) } name={ name } value={ item.id } onChange={ e => onChange( e, item ) } />
            <div className={decorate( "choice-content" )}>

                {expand( template, item )}
                <div className="actions">

                    <button mode="button" className={decorate( "choose" )} onClick={e => onChange( e, item )}>{texts.choose}</button>
                    <button mode="button" className={decorate( "cancel" )} onClick={e => onChange( e, undefined )}>{texts.done}</button>
                    <div className="danger-actions">
                
                        {onDelete && <button mode="button" className={decorate( "delete" )} onClick={e => onDelete( e, item )}>{texts.delete}</button>}
                        {onArchive && <button mode="button" className={decorate( "archive" )} onClick={e => onArchive( e, item )}>{texts.archive}</button>}

                    </div>
                    
                </div>
                
                
            </div>
            
        </label>;

const EditableMenuItem =

    ( { decorate, chosen, name, template, onChange, onSave, texts, editable={} } ) => 
    
        <label className={`editing ${decorate( "choice" )}`}>
                
            <input type="radio" checked={ true } name={ name } value={ chosen.id } onChange={ e => onChange( e, chosen ) } />
            <div className={decorate( "choice-content" )} onChange={e => onChange( e, chosen)}>

                {expand( template, chosen, editable )}
                <div className="actions">

                    <button mode="button" className={decorate( "editable" )} onClick={e => onSave( e, chosen )}>{texts.save}</button>
                    <button mode="button" className={decorate( "cancel" )} onClick={e => onChange( e, undefined )}>{texts.done}</button>
                    
                </div>
                
            </div>
            
        </label>;
        
const withDefaults = func => props => func( { 
    
    name: generateName(),
    onChange: noop,
    decorate: thru,
    ...props,
    texts: { ...defaultTexts, ...props.texts }
    
} );

const Menu = 

    withDefaults( props => 
    
        <section className={props.decorate( `menu ${props.chosen ? "chosen" : "" }` )}>
    
            <div className={props.decorate( "choices" )}>{

                props.items
                    .slice( 0 )
                    .sort( byScoreSum )
                    .map( item => ( props.chosen && props.chosen.id === item.id )
                        ? props.onSave 
                            ? <EditableMenuItem key={ item.id } {...props} item={ item } />
                            : <MenuItem key={ item.id } {...props} item={ item } />
                        : <MenuItem key={ item.id } {...props} item={ item } /> 
                    )

            }</div>
        
        </section>

    );

export default Menu;