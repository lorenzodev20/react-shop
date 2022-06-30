import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../styles/NotFound.scss';


const NotFound = () => {
    return (

        <div className="not-found">
            <div className="container-center">
                <h1 className="title">Error 404</h1>
                <p className="subtitle">Página no encontrada</p>
                <a href="/" className='subtitle'>Volver al inicio</a>
            </div>
        </div>

    );
}

export default NotFound;