import React, { useState, useEffect } from 'react'
import Character from '../../components/Character/Character';
import { useCharacter } from '../../hooks/character-hook';



const DetailsContainer = ({match}) => {
    const [loading, character] = useCharacter(match.params.is);
    
         return (
            <div>
                {loading ? (<h1>LOADING...</h1>)
                : (<Character aria-label='character' 
                id={character.id} 
                name={character.name} 
                image={character.image}
                />)}
                
            </div>
        );
    };
    export default DetailsContainer

