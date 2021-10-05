import React from 'react';
import About from '../main/About';
import Contact from '../main/Contact';
import Home from '../main/Home';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <p>Aquí va la navegación</p>
                <hr />
                <Home />
                <About />
                <Contact />
            </div>
        );
    }
}

export default Layout;