import React from 'react';
import Nav from '../../components/Navbar';
import Footer from '../../components/Footer';
const Home: React.FC = () => {
    return (
        <>
            <Nav/>
            <main className="home-container">
                <div className="d-block d-sm-none">
                    <h1>Hector Ricardez</h1>
                    <h2>Kishtarn</h2>
                </div>

                <div className="top-container bg-secondary w-100 row m-0 g-0 align-items-stretch position-relative">
                    <div className="position-absolute d-none d-sm-block bg-none bottom-0 start-50 translate-middle w-auto h-auto p-3 text-center name-box text-light">
                        <h1>Hector Ricardez</h1>
                        <h2>Kishtarn</h2>
                    </div>

                    <a
                        className="col-xm-12 col-sm-6 bg-secondary h-xm-50 h-sm-100 d-flex flex-column align-items-center pb-4 pt-4 art-btn hover-effect text-decoration-none text-light"
                        href="art"
                    >
                        <h3>Artist</h3>
                    </a>

                    <a
                        className="col-xm-12 col-sm-6 bg-primary h-xm-50 h-sm-100 d-flex flex-column align-items-center pb-4 pt-4 software-btn hover-effect text-decoration-none text-light"
                        href="developer"
                    >
                        <h3>Developer</h3>
                    </a>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Home;