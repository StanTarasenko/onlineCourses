// Modules
import React, { useState, useEffect } from 'react';

// MUI
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Icons
import logo from '../../icons/logoAN.jpg';

// Base
import allPrograms from '../../mockBase/allPrograms';

// Styles
import styles from './fullList.module.scss';

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const FullListPage = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  console.log('windowSize', windowSize);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <div>
          <img src={logo} alt='logo' height="40px" width="40px" style={{ borderRadius: "50%"}} />
        </div>
        <div className={styles['langContainer']}>
          <Button variant="text">UA</Button>
          <Button variant="text">RU</Button>
        </div>
      </div>
      <div className={styles['body']}>
        <div className={styles['body_container']}>
          {windowSize.innerWidth > 1100 && 
            <div className={styles['body_container_header']}>
              <div className={styles['body_container_part']}>Послуга</div>
              <div className={styles['body_container_part']}>Iнформацiя</div>
              <div className={styles['body_container_part']}>Цiна</div>
              <div className={styles['body_container_part']}>Детально</div>
            </div>
          }
            {allPrograms.map((program, i) => 
              <div 
                key={program.id} 
                className={windowSize.innerWidth > 1100 ? i < allPrograms.length - 1
                  ? styles['body_container_header'] 
                  : styles['body_container_header_border']
                  : styles['body_container_smallHeader']
                } 
              >
                <div className={windowSize.innerWidth < 1100 && styles['body_container_smallHeader_title']}>
                  {program.title}
                </div>
                <div className={windowSize.innerWidth < 1100 && styles['body_container_smallHeader_text']}>
                    {program.shortInfo}
                </div>
                <div className={styles['body_container_price']}>{program.price}</div>
                <div className={windowSize.innerWidth > 1100
                  ? styles['body_container_link'] 
                  : styles['body_container_smallLink']
                }>
                  <Link
                    to={ `/doctorAN/details/${ program.id }` }
                    onClick={ () => localStorage.setItem("sectionId", program.id) }
                  >
                    Детально
                  </Link>
                </div>
              </div>
            )}
        </div>
        <div className={styles['body_container_linkBack']}>
            <Link
              to={ `/doctorAN` }
              onClick={ () => localStorage.setItem("sectionId", '') }
            >
              На головну
            </Link>
          </div>
      </div>
    </div>)
};

export default FullListPage;
