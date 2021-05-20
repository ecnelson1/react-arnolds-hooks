import {useEffect, useState} from 'react';
import {allCharacters } from '../Services/api-utils';


export const useCharacters = () => {
    const[loading, setLoading] = useState(true);
    const [characters, setCharacter] = useState([]);

    useEffect(()=> {
        allCharacters()
        .then((characters) => setCharacter(characters))
        .finally(()=> setLoading(false));
    });
    return [loading, characters];
};
