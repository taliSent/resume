import React from 'react';
import { HashLink } from 'react-router-hash-link';
import About from './sections/about/About';
import ContactMe from './sections/contactMe/ContactMe';
import Experience from './sections/education/Experience';
import Stack from './sections/stack/Stack';
import Testimonials from './sections/testimonials/Testimonials';
import MediaQuery from 'react-responsive';
import { BsArrowUpCircle } from 'react-icons/bs';

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