import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{textAlign:'center'}}>
            <h1>Page Not found</h1>
            <h3>404 error</h3>
            <Link to="/">Go back to Shop</Link>
        </div>
    );
};

export default NotFound;