import React from 'react';


const SearchBox = ({searchchange}) =>{
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-light-blue' type="search" placeholder='search for robo'  onChange= {searchchange}/>
        </div>
    )
}

export default SearchBox;