import React from 'react';
import Logo from '../assets/img/Logo.png';

function About() {
    return (
        <section className='about'>
            <div>
                <img src={Logo} className='logo' alt="UPC Logo" />
            </div>
            <div>
                <p><i>Our mission is to cultivate a Permanent Culture of healthy, resilient communities living in harmony with nature.</i></p>
            </div>
            <div>
                <p>We aim to honor the traditions of indigenous people who live the ways of permaculture and have for centuries by educating future stewards in our community about these roots. We teach and acknowledge that the practices of indigenous people preempt and inform our current understanding of nature/human relationships. They teach us the practice of caring for earth, for our future, and for one another. We are due to give back.</p>
            </div>
        </section>
    );
}

export default About;