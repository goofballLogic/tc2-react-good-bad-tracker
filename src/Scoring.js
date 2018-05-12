import React, { Component } from "react";
import OneOf from "./OneOf";

import Yes from "svg-react-loader!../svg/yes.svg";
import No from "svg-react-loader!../svg/no.svg";
import Not from "svg-react-loader!../svg/not.svg";

const DOWN = "down", UP = "up", NEITHER = "-";

const targetOptions = target => [
    
    target.scores.find( s => s.downScore ) ? { value: DOWN, child: <No /> } : undefined,
    { value: NEITHER, child: <Not /> },
    target.scores.find( s => s.upScore ) ? { value: UP, child: <Yes /> } : undefined
    
].filter( x => x );

const thru = x => x;

const scoreOf = ( selected, target ) => 
    ( selected === UP && target.upScore ) ? <span className="up">{target.upScore}</span> :
    ( selected === DOWN && target.downScore ) ? <span className="down">{target.downScore}</span> :
    <span className="nothing" />;

const num = x => Number( x ) || 0;

const scoreResult = ( score, selected, target ) =>
    selected === UP ? <span className="up">{ target.scores.reduce( ( sum, x ) => sum + num( x.upScore ), num( score ) ) }</span> :
    selected === DOWN ? <span className="down">{ target.scores.reduce( ( sum, x ) => sum - num( x.downScore ), num( score ) ) }</span> :
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
    {target.scores.map( s =>
       
       <td key={s.id} className={decorate( `score-diff ${s.id}` )}>{scoreOf( selected, s )}</td>

    ) }
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
        if ( handleChange ) { handleChange( selected ); }
        
    }
    
    render() {

        const { target, scorees, decorate = thru } = this.props;
        if ( !( target && scorees ) ) return null;
        return <div className={decorate( "scoring" )}>
    
            <table>
                <thead>
                    <th colspan="3">&nbsp;</th>
                    { target.scores.map( s => <th>{s.component}</th> ) }
                </thead>
                <tbody>
                { scorees.map( s => 
                
                    <Scoree 
                        key={ s.id } { ...s } target={ target }
                        handleChange={ this.handleChange.bind( this, s.id ) }
                        selected={ this.state.selected[ s.id ] }
                        decorate={ decorate }
                        /> 
                        
                ) }
                </tbody>
            </table>
            
        </div>;
        
    }
    
}
