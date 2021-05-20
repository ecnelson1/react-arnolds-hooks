import {useEffect, useState} from 'react';
import {characterById } from '../Services/api-utils';

export const useCharacter = () => {
    const[loading, setLoading] = useState(true);
    const [character, setCharacter] = useState({});

    useEffect(()=> {
        characterById()
        .then((character) => setCharacter(character))
        .finally(()=> setLoading(false));
    });
    return [loading, character];
};
