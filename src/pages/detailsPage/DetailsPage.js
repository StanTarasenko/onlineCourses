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
  const navigate = useNavigate();

  const handlerSaveId = () => {
    localStorage.setItem("isMemorize", true);
    navigate(-1);
  };

  return (
    <div className={styles['container']}>
      <Button 
        variant="outlined" 
        onClick={handlerSaveId}
        >
          Go back
        </Button>
      <div className={styles['title']}>
        {currentCourse.title}
      </div>
      <div className={styles['imageBox']}>
        <Box
          component="img"
          className={styles['imageBox_img']}
          alt="The house from the offer."
          src={currentCourse.image}
        />
      </div>
      <div className={styles['fullInfo']}>
        {currentCourse.fullInfo}
      </div>
      <div>
        Price:{currentCourse.price}.00 грн
      </div>
    </div>)
};

export default DetailsPage;
