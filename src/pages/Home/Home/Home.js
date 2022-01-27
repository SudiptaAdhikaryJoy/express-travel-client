import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Blogs from '../Blogs/Blogs';
import HeroCarousel from '../HeroCarousel/HeroCarousel';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroCarousel />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;