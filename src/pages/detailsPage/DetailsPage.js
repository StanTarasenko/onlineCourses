// Modules
import { useParams, useNavigate } from 'react-router-dom';

// Data
import coursesBaseUK from '../../mockBase/coursesBase';

// MUI
import { Button, Box } from '@mui/material';

// Styles
import styles from './details.module.scss';

const DetailsPage = () => {
  const params = useParams();

  const currentCourse = coursesBaseUK.find((item) => item.id === params.courseId);
  const text = currentCourse.fullInfo;
  const devidedText = text.split(".");
  const navigate = useNavigate();

  const handlerSaveId = () => {
    localStorage.setItem("isMemorize", true);
    navigate(-1);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        {currentCourse.title}
      </div>
      <div className={styles['container_main']} 
        data-aos="zoom-in-left" 
        data-aos-offset="500"
        data-aos-duration="500"
      >
      <div className={styles['imageBox']}>
        <Box
          component="img"
          className={styles['imageBox_img']}
          alt="The house from the offer."
          src={currentCourse.image}
        />
      </div>
      <div className={styles['fullInfo']}>
        {devidedText.map((item, i) => <div key={i}>
          {item}
        </div>)}
      </div>
      </div>
      <div className={styles['fullInfo']} style={{marginTop: '20px', fontWeight: 'normal'}}>
        Цiна:{currentCourse.price}.00 грн
      </div>
      <div className={styles['btn']}>
        <Button 
          variant="outlined" 
          onClick={handlerSaveId}
        >
          Повернутись
        </Button>
      </div>
    </div>)
};

export default DetailsPage;
