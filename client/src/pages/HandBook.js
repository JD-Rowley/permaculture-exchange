import React from 'react';
import Logo from '../assets/img/Logo.png';
import spirit from '../assets/img/spirit.jpg';
import vows from '../assets/img/vows.jpg';
import list from '../assets/img/list.jpg';

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
                <div className="flex-container">
                    <img src={list} className='logo' alt="a list of things they represent" />
                </div>
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