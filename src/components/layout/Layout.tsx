import React from 'react';
import Links from '../links/Links';
import About from './sections/about/About';
import ContactMe from './sections/contactMe/ContactMe';
import Experience from './sections/education/Experience';
import Stack from './sections/stack/Stack';
import Testimonials from './sections/testimonials/Testimonials';

const Layout: React.FC = () => {
    return (
        <>
            <About />
            <Stack />
            <Experience />
            <Testimonials />
            <ContactMe />
        </>
    )
}
export default Layout;