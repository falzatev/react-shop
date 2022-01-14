import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {
    return (
        <div className='container'>
            <h1 className='error'>4<span>0</span>4</h1>             
            <p className='description'><span>Plop!!</span> Parece que la página que buscas no existe.</p>
        </div>
    )
}

export default NotFound
