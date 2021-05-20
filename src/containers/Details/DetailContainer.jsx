import React, { useState, useEffect } from 'react'
import Character from '../../components/Character/Character';
import { characterById } from '../../Services/api-utils';


const DetailsContainer = ({match}) => {
    const [loading, setLoading] = useState(true);
    const[character,setCharacter] = useState({});
    useEffect(()=>{
        characterById(match.params.id)
        .then(setCharacter)
        .finally(()=> setLoading(false));
    },[])

        if(loading) return <h1>LOADING...</h1>;

         return (
            <div>
                <Character aria-label='character' id={character.id} name={character.name} image={character.image}/>
            </div>
        );
    };
    export default DetailsContainer

