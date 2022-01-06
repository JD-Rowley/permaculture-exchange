import React from 'react';
import Logo from '../assets/img/Logo.png';
import spirit from '../assets/img/Screen Shot 2022-01-05 at 10.33.54 PM.jpg'

function HandBook() {
    return (
        <section className='about'>
            <div>
                <img src={Logo} className='logo' alt="UPC Logo" />
            </div>
            <div>
                <p>
                    Observe and interact - By taking the time to engage with nature we can design solutions that suit our particular situation.
                    Catch and store energy - By developing systems that collect resources when they are abundant, we can use them in times of need.
                    Obtain a yield - Ensure that you are getting truly useful rewards as part of the work that you are doing.
                    Apply self-regulation and accept feedback - We need to discourage inappropriate activity to ensure that systems can continue to function well.
                    Use and value renewable resources and services - Make the best use of nature’s abundance to reduce our consumptive behaviour and dependence on non-renewable resources.
                    Produce no waste - By valuing and making use of all the resources that are available to us, nothing goes to waste.
                    Design from patterns to details - By stepping back, we can observe patterns in nature and society. These can form the backbone of our designs, with the details filled in as we go.
                    Integrate rather than segregate - By putting the right things in the right place, relationships develop between those things and they work together to support each other.
                    Use small and slow solutions - Small and slow systems are easier to maintain than big ones, making better use of local resources and produce more sustainable outcomes.
                    Use and value diversity - Diversity reduces vulnerability to a variety of threats and takes advantage of the unique nature of the environment in which it resides.
                    Use edges and value the marginal - The interface between things is where the most interesting events take place. These are often the most valuable, diverse and productive elements in the system.
                    Creatively use and respond to change - We can have a positive impact on inevitable change by carefully observing, and then intervening at the right time.
                </p>
                <div>
                    <img src={spirit} className='logo' alt="spirtual wheel of importance" />
                </div>
                <div>
                    <img src={spirit} className='logo' alt="UPC Logo" />
                </div>
            </div>
        </section>
    );
}

export default Handbook;