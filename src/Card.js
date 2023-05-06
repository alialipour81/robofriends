import React from 'react';


const Card = ({id,name,email}) =>{
    return (
        <div className='bg-light-green dib br3 pa2 ma2 shadow-5 grow tc'>
            <img src={`https://robohash.org/test${id}?200*200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;