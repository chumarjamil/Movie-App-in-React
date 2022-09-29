import React from 'react'

const Header = (props) => {
    return (
        <div className='col'>
            <h2>{props.heading}</h2>
        </div>
    )
}

export default Header