import React from 'react';
import ConstructionWarning from '../../components/warnings/construction';

const NotFound: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <ConstructionWarning/>
            <a href='/'>
                <i className="bi bi-house-fill"></i>{" "}
                Go back to home

            </a>
        </div>
    );
}

export default NotFound;