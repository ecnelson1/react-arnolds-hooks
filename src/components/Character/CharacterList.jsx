import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'
import { Link } from 'react-router-dom'

function CharacterList({ characters }) {
    return (
        <ul aria-label= 'characters'>
            {characters.map((character) => (
                <li key={character._id}>
                    <Link to={`/${character.id}`}>
                    <Character
                    id={character._id}
                    name={character.name}
                    image={character.image}
                    />
                    </Link>
                </li>
            ))}
            
        </ul>
    )
}

CharacterList.propTypes = {
    character: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    )

}

export default CharacterList
