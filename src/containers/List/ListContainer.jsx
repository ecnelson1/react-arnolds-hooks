import React from 'react'
import CharacterList from '../../components/Character/CharacterList';
import { useCharacters } from '../../hooks/characters-hook';



const ListContainer = () =>  {
    const[loading, characters] = useCharacters();

        return (
            <div>
                {loading ? (<h1>LOADING...</h1>)
                :(<CharacterList characters={characters}/>)}
                
            </div>
        );
        };
        export default ListContainer;
