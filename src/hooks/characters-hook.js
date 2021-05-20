import {useEffect, useState} from 'react';
import {allCharacters } from '../Services/api-utils';


export const useCharacters = () => {
    const[loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(()=> {
        allCharacters()
        .then((characters) => setCharacters(characters))
        .finally(()=> setLoading(false));
    },[]);
    return [loading, characters];
};
