import {useEffect, useState} from 'react';
import {characterById } from '../Services/api-utils';

export const useCharacter = (id) => {
    const[loading, setLoading] = useState(true);
    const [character, setCharacter] = useState({});
 
    useEffect(()=> {
        characterById(id)
        .then((character) => setCharacter(character))
        .finally(()=> setLoading(false));
    },[]);
    return [loading, character];
};
