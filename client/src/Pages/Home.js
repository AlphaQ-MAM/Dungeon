import React, { Fragment } from 'react';
import Section1 from '../Components/Section1/Section1';
import About from '../Components/About/About';
import News from '../Components/News/News';
const Home = () => {
    return (
        <Fragment>
            <Section1 />
            <About />
            <News/>
        </Fragment>
    );
};
export default Home;