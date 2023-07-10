// Modules
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import HomePage from './pages/homePage';
import DetailsPage from './pages/detailsPage';
import NotFoundPage from './pages/NotFoundPage';

// Styles
import styles from './app.scss';

function App() {
  return (
    <div className={styles['app']}>
      <Routes>
        <Route path="/" element={ <Navigate to="/online-courses" /> } exact />
        <Route path="/online-courses" element={ <HomePage /> } exact />
        <Route path="/online-courses/details/:courseId" element={ <DetailsPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </div>
  );
}

export default App;
