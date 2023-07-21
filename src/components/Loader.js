// Modules
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Assets
import logo from '../icons/logoAN.jpg';

// Styles
import styles from './loader.module.scss';

const Loader = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles['container']}>
      <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="750">
        <img src={logo} alt='logo' height="80px" width="80px" style={{ borderRadius: "50%"}} />
      </div>
    </div>
  );
};

export default Loader;
