import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'

const Character = ({name, image, _id}) => {
    let history = useHistory();
    const handleClick = () => {
        history.push(`/${_id}`)
        history.go(`/${_id}`)
    }
    return (
        <figure aria-label='character'>
            <img src = {image} alt = {name} onClick= {handleClick}/>
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
