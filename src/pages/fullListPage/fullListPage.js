// MUI
import { Button } from '@mui/material';
import logo from '../../icons/logoAN.jpg';

// Styles
import styles from './fullList.module.scss';

const FullListPage = () => {
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
    </div>)
};

export default FullListPage;
