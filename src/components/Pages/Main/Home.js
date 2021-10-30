import React from 'react';
import Banner from '../Home/Banner/Banner';
import BannerTwo from '../Home/Banner/BannerTwo';
import Honeys from '../Home/HoneyTours/Honeys';
import Offers from '../Home/Offers/Offers';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <BannerTwo></BannerTwo>
            <Honeys></Honeys>
        </div>
    );
};

export default Home;