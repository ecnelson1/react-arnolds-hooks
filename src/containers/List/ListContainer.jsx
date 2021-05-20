import React, { useState, useEffect } from 'react'
import CharacterList from '../../components/Character/CharacterList';
import { allCharacters } from '../../Services/api-utils';


const ListContainer = () =>  {

    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        allCharacters()
        .then(setCharacters)
        .finally(()=> setLoading(false));
        
    },[])

    if (loading) return <h1>LOADING...</h1>;

        return (
            <div>
                <CharacterList characters={characters} />
            </div>
        );
        };
        export default ListContainer;
