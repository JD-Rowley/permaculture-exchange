import React from 'react';
import Logo from '../assets/img/Logo.png';
import spirit from '../assets/img/spirit.jpg'
import vows from '../assets/img/vows.jpg'

function Handbook() {
    return (
        <section className='about'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <div className="flex-container">
                <img src={Logo} className='logo' alt="UPC Logo" />
            </div>
            <div className="flex-container">
                <p ><i>
                    Observe and interact - By taking the time to engage with nature we can design solutions that suit our particular situation.
                    <br></br>
                    Catch and store energy - By developing systems that collect resources when they are abundant, we can use them in times of need.
                    <br></br>
                    Obtain a yield - Ensure that you are getting truly useful rewards as part of the work that you are doing.
                    <br></br>
                    Apply self-regulation and accept feedback - We need to discourage inappropriate activity to ensure that systems can continue to function well.
                    <br></br>
                    Use and value renewable resources and services - Make the best use of nature’s abundance to reduce our consumptive behaviour and dependence on non-renewable resources.
                    <br></br>
                    Produce no waste - By valuing and making use of all the resources that are available to us, nothing goes to waste.
                    <br></br>
                    Design from patterns to details - By stepping back, we can observe patterns in nature and society. These can form the backbone of our designs, with the details filled in as we go.
                    <br></br>
                    Integrate rather than segregate - By putting the right things in the right place, relationships develop between those things and they work together to support each other.
                    <br></br>
                    Use small and slow solutions - Small and slow systems are easier to maintain than big ones, making better use of local resources and produce more sustainable outcomes.
                    <br></br>
                    Use and value diversity - Diversity reduces vulnerability to a variety of threats and takes advantage of the unique nature of the environment in which it resides.
                    <br></br>
                    Use edges and value the marginal - The interface between things is where the most interesting events take place. These are often the most valuable, diverse and productive elements in the system.
                    <br></br>
                    Creatively use and respond to change - We can have a positive impact on inevitable change by carefully observing, and then intervening at the right time.
                    </i></p>
                <div className="flex-container">
                    <img src={spirit} className='logo' alt="spirtual wheel of importance" />
                </div>
                <br>
                </br>
                <div className="flex-container">
                    <img src={vows} className='logo' alt="a list of vows by Joanna Macy" />
                </div>
            </div>
        </section>
    );
}

export default Handbook;