import React from 'react';
import Banner from '../Home/Banner/Banner';
import Honeys from '../Home/HoneyTours/Honeys';
import Offers from '../Home/Offers/Offers';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Honeys></Honeys>
        </div>
    );
};

export default Home;