import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Menu.css';
import { SubHeading, Card } from '../../components';
// import { images } from '../../constants';


const Menu = () => {
    const props = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-20px)' },
        config: { duration: 500 }
    });

    return (
        <animated.div style={props} className='app__menu section__padding' id='menu'>
            <div className='app__menu-title'>
                <SubHeading title="Menu" />
                <h2 className='headtext__cormorant'>Les plats de notre restaurant</h2>
            </div>

            {/* <div className='app__menu-content'>
              <img src={images.menu} alt="menu" />  
            </div> */}
            <Card />
        </animated.div>
    )
}

export default Menu;
