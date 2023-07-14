// Modules
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// MUI
import { Button, Box } from '@mui/material';
import logo from '../../icons/logoAN.jpg';

// Data
import coursesBaseUK from '../../mockBase/coursesBase';

// Styles
import styles from './styles.module.scss';
import { personalInfo } from '../../mockBase/personalInfo';

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const HomePage = () => {
  const isCheckId = localStorage.getItem('isMemorize');
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isFullInfo, setIsFullInfo] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isCheckId === 'true') {
      const id = localStorage.getItem('sectionId');
      const element = document.getElementById(`section-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      localStorage.setItem("isMemorize", false);
    }
  }, [isCheckId]);

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
      <div className={styles['section']}>
        <div className={styles['section_main']}>
          <div className={styles['section_main_container']}>
            {windowSize.innerWidth > 500 && 
              <span className={styles['customText']} style={{fontSize: "48px"}}>
                Персональний кабiнет психолога
              </span>
            }
            {windowSize.innerWidth < 500 && 
              <span className={styles['customText']}>
                Персональний кабiнет психолога
              </span>
            }
          </div>
        </div>
      </div>
      <div className={styles['section']}>
        <div className={styles['section_info']}>
          {windowSize.innerWidth > 500 
            ? <div className={styles['section_info_title']} style={{fontSize: "36px"}}>
                Перелік послуг
              </div> 
            : <div className={styles['section_info_title']}>
                Перелік послуг
              </div>
          }
          {coursesBaseUK.map((course) => 
            <div className={styles['section_info_item']} key={course.id} id={`section-${course.id}`}>
              <Box
                component="img"
                className={ styles['section_info_img'] }
                alt="The house from the offer."
                src={ course.image } 
              />
                <div className={ styles['section_info_item_text'] }>
                  <h2 style={ { fontWeight: '300', marginBottom: '10px' } }>{ course.title }</h2>
                  <div className={ styles['shortInfo'] }>
                    {course.shortInfo}
                  </div>
                  <Link
                    to={ `/doctorAN/details/${ course.id }` }
                    className={ styles['section_info_link'] }
                    onClick={ () => localStorage.setItem("sectionId", course.id) }
                  >
                    Детально
                  </Link>
                </div>
          </div>
          )}

          <div className={styles['section_info_fullList']}>
            <Link
              to={`/doctorAN/fullList`}
              className={ styles['section_info_link'] }
            >
              Повний перелiк
            </Link> 
          </div>   
        </div>
      </div>
      <div className={styles['section']}>
        <div>
          <div className={styles['personalInfo']}>
            {isFullInfo ? personalInfo.fullLetter : personalInfo.shortLetter}
            <div className={styles['personalInfo_btn']}>
              <Button variant="text" onClick={() => setIsFullInfo((prev) => !prev)}>{isFullInfo ? 'Згорнути' : 'Розкрити'}</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['section']}>
        <div className={styles['section_giftBox']}>
          <div>Подарунковий сертифікат</div>
          <div>Подарунковий сертифікат</div>  
        </div>
      </div>
      <div className={styles['section']}>
        Some Info
      </div>
    </div>
  )
};

export default HomePage;
