import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const layout = (props) => (
    <>
        <Navbar />
        <div className="m-1 overflow-auto" style={{height: '650px'}}>
            {props.children}
        </div>
        <Footer />
    </>
)

export default layout;