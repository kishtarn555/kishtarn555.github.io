import React from 'react';
import Nav from '../../../components/Navbar';
import Footer from '../../../components/Footer';
const Home: React.FC = () => {
    return (
        <>
            <Nav/>
            <main className="dev-container">
                <div className="container-fluid m-4 border rounded p-2 w-auto bg-body shadow">
                    <h1>Developer Projects</h1>
                    <div className='d-flex mt-2'>
                        <p>Welcome to the developer projects page. Here you will find a list of my software development projects.</p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Home;