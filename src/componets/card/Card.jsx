import React from 'react';
import './Card.css';

export const Card = props => (
    <div className='card-container'> 
        <img alt="monster" src={`https://robohash.org/${props.monster.id}1?set=set2&size=200x200`} />
        <h2 key='monster.id'> {props.monster.name}</h2>
        <p> {props.monster.email}</p> 
    </div>

)


