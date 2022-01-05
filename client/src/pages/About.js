import React from 'react';
import Logo from '../assets/img/Logo.png';

function About() {
    return (
        <section className='about'>
            <div>
                <img src={Logo} className='logo' alt="UPC Logo" />
            </div>
            <div>
                <p>Ex dolore Lorem Lorem qui magna. Esse fugiat quis reprehenderit fugiat pariatur officia ullamco nisi ad anim mollit voluptate nulla aute. Do dolore anim pariatur est id duis non eiusmod consequat incididunt id magna sunt qui.</p>
            </div>
        </section>
    );
}

export default About;