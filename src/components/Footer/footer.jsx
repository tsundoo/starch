import React from 'react';
import './footer.css';
import { images } from '../../constants';
import { FiInstagram} from 'react-icons/fi';


const Footer = () => {
    return (
            <div className='app__footer section__padding' id='contact'>
                <div className='app__footer-links'>
                    <div className='app__footer-links_contact'>
                        <h1 className='app__footer-headtexts'>Contact Us</h1>
                        <p className='p__opensans'>64 rue d'auxonne</p>
                        <p className='p__opensans'>21000 Dijon</p>
                        <p className='p__opensans'>+33 09 52 25 91 98</p>
                    </div>

                    <div className='app__footer-links_logo'>
                        <img src={images.logo} alt="footer_logo" />
                        <p className='p__opensans'>"tous nos produits sont halal."</p>
                        <img src={images.spoon} alt="spoon"  className="spoon__img" style={{ marginTop: 15 }}/>
                        <div className='app__footer-links_icons'>
                       
                            <FiInstagram />
                        
                        </div>
                    </div>

                    <div className='app__footer-links_work'>
                        <h1 className='app__footer-headtexts'>Heures d'ouverture</h1>
                        <p className='p__opensans'>Lundi-Vendredi:</p>
                        <p className='p__opensans'>08:00 am - 12:00 am</p>
                        <p className='p__opensans'>Samedi-Dimanche:</p>
                        <p className='p__opensans'>07:00 am - 11:00 pm</p>
                    </div>
                </div>

                <div className='footer__copyright'>
                        <p className='p__opensans'>2024 West Africa. All Rights reserved.</p>
                </div>
            </div>
    )
}

export default Footer;