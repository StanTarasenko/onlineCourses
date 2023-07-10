// Modules
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// MUI
import { Button, Box } from '@mui/material';

// Data
import coursesBaseUK from '../../mockBase/coursesBase';

// Styles
import styles from './styles.module.scss';

const HomePage = () => {
  const isCheckId = localStorage.getItem('isMemorize');

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
          Online Courses
        </div>
        <div className={styles['langContainer']}>
          <Button variant="text">UA</Button>
          <Button variant="text">RU</Button>
        </div>
      </div>
      <div className={styles['section']}>
        <div className={styles['section_header']}>
          Main Info
        </div>
      </div>
      <div className={styles['section_larg']}>
        <div className={styles['section_info']}>
          <div className={styles['section_info_title']}>
            Актуальні курси
          </div>
          {coursesBaseUK.map((course) => 
            <div className={styles['section_info_item']} key={course.id} id={`section-${course.id}`}>
            <Box
              component="img"
              className={styles['section_info_img']}
              alt="The house from the offer."
              src={course.image}
            />
            <div className={styles['section_info_item_text']}>
              <div>
                <h1 style={{fontWeight: '300'}}>{course.title}</h1>
              </div>
              <span>{course.shortInfo}</span>
              <Link 
                to={`/online-courses/details/${course.id}`} 
                className={styles['section_info_link']} 
                onClick={() => localStorage.setItem("sectionId", course.id)}
              >
                Детально
              </Link>
            </div>
          </div>
          )}
        </div>
      </div>
      <div className={styles['section']}>
        <div className={styles['section_header']}>
          Some other info
        </div>
      </div>
    </div>
  )
};

export default HomePage;
