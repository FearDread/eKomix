import React from "react";
import "./animated-hero.css";

const AnimatedHero = () => {

    return (
        <div className="hero-container">
            <div className="hero-overlay"></div>
            <p id='head1' className='animated-header'>Welcom to E-KomiX!</p>
            <p id='head2' className='animated-header'>Browse our RARE Collections </p>
            <p id='head3' className='animated-header'>Cards, Comics, Coins, and Collectibles</p>
            <p id='head4' className='animated-header'>Sign up and Shop!</p>
            <p id='head5' className='animated-header'>Face Everything and Rise</p>

                <button className="hero-button" onClick={(e) => {window.location.href="/products" }}>Shop Now!</button>
            
            <div className='light x1'></div>
            <div className='light x2'></div>
            <div className='light x3'></div>
            <div className='light x4'></div>
            <div className='light x5'></div>
            <div className='light x6'></div>
            <div className='light x7'></div>
            <div className='light x8'></div>
            <div className='light x9'></div>
        </div>
    )
}

export default AnimatedHero;