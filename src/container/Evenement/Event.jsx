import React from 'react';
import './Event.css';
import { images } from '../../constants';

const Event = () => {
    return (
        <div className='app__event section__padding' id='events'>
            <div className='app__event-title'>
                
                <h2>Chaque bouchée raconte une histoire, chaque sourire en témoigne.</h2>
            </div>

            <div className='app__event-images'>
                <img src={images.person1} alt="clients" />
                <img src={images.person2} alt="clients" />
                <img src={images.person3} alt="clients" />
                <img src={images.person4} alt="clients" />
            </div>

            <div className='app__event-content'>
                <p>Les épices de l’Afrique, les rires de nos clients, WEST AFRICA, un festin pour tous les sens.</p>
            </div>

        </div>
    )
}

export default Event;