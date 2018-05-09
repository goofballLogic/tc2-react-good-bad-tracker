import React, { Component } from "react";
import OneOf from "./OneOf";

import Yes from "svg-react-loader!../svg/yes.svg";
import No from "svg-react-loader!../svg/no.svg";
import Not from "svg-react-loader!../svg/not.svg";

const DOWN = "down", UP = "up", NEITHER = "-";

const targetOptions = target => [
    
    target.downScore ? { value: DOWN, child: <No /> } : undefined,
    { value: NEITHER, child: <Not /> },
    target.upScore ? { value: UP, child: <Yes /> } : undefined
    
].filter( x => x );

const thru = x => x;

const scoreOf = ( selected, target ) => 
    selected === UP ? <span className="up">{target.upScore}</span> :
    selected === DOWN ? <span className="down">{target.downScore}</span> :
    null;

const num = x => Number( x ) || 0;

const scoreResult = ( score, selected, target ) =>
    selected === UP ? <span className="up">{ num( score ) + num( target.upScore ) }</span> :
    selected === DOWN ? <span className="down">{ num( score ) - num( target.downScore ) }</span> :
    null;

const Scoree = ( { id, name, score, target, selected, handleChange, decorate } ) => <tr className={decorate( "scoree" )}>
    
    <td className={decorate( "name" )}>{name}</td>
    <td>
        <OneOf 
            name = { id }
            options = { targetOptions( target ) }
            selected = { selected || NEITHER }
            handleChange = { handleChange } />
    </td>
    <td className={decorate( "score" )}>{score}</td>
    <td className={decorate( "score-diff" )}>{scoreOf( selected, target )}</td>
    <td className={decorate( "score-result" )}>{scoreResult( score, selected, target )}</td>
    
</tr>;

export default class Scoring extends Component {
    
    constructor() {
        
        super();
        this.state = { selected: {} };
        
    }
    
    static getDerivedStateFromProps( nextProps, prevState ) {

        if ( nextProps.target && ( prevState.targetId === nextProps.target.id ) ) return null;
        const nextState = { 
            
            targetId: nextProps.target ? nextProps.target.id : undefined, 
            selected: {}
            
        };
        return nextState;
        
    }
    
    handleChange( scoreeId, e, i ) {
    
        const { selected } = this.state;
        selected[ scoreeId ] = ( i === NEITHER ) ? undefined : i;
        this.setState( { selected } );            
        const { handleChange, target } = this.props;
        const deltas = Object.keys( selected )
            .map( key => [ key, selected[ key ] ] )
            .reduce( ( index, [ key, value ] ) => ( {
            
                ...index,
                [ key ]: value === UP ? target.upScore : value === DOWN ? -target.downScore : undefined
            
            } ), {} );
        if ( handleChange ) { handleChange( deltas ); }
        
    }
    
    render() {
        
        const { target, scorees, decorate = thru } = this.props;
        if ( !( target && scorees ) ) return null;
        return <div className={decorate( "scoring" )}>
    
            <table><tbody>
            { scorees.map( s => 
            
                <Scoree 
                    key={ s.id } { ...s } target={ target }
                    handleChange={ this.handleChange.bind( this, s.id ) }
                    selected={ this.state.selected[ s.id ] }
                    decorate={ decorate }
                    /> 
                    
            ) }
            </tbody></table>
            
        </div>;
        
    }
    
}
