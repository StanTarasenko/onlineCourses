// Modules
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import HomePage from './pages/homePage';
import DetailsPage from './pages/detailsPage/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import FullListPage from './pages/fullListPage/fullListPage';

// Styles
import styles from './app.scss';

function App() {
  window.localStorage.setItem('isShowLoader', false);

  return (
    <div className={styles['app']}>
      <Routes>
        <Route path="/" element={ <Navigate to="/doctorAN" /> } exact />
        <Route path="/doctorAN" element={ <HomePage /> } exact />
        <Route path="/doctorAN/details/:courseId" element={ <DetailsPage /> } />
        <Route path="/doctorAN/fullList" element={ <FullListPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </div>
  );
}

export default App;
