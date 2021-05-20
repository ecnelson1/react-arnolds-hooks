import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'

const Character = ({name, image, id}) => {
    return (
        <figure aria-label='character'>
            <img src = {image} alt = {name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}
Character.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}
export default Character
