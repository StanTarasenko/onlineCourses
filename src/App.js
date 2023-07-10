// Modules
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Navigate to="/online-courses" /> } exact />
        <Route path="/online-courses" element={ <HomePage/> } exact />
        <Route path="/online-courses/details/:courseId" element={ <DetailsPage/> } />
        <Route path="*" element={ <NotFoundPage/> } />
      </Routes>
    </div>
  );
}

export default App;
