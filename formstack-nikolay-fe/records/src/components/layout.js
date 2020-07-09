import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const layout = (props) => (
    <div>
        <Navbar/>
            {props.children}
        <Footer/>
    </div>
)

export default layout;