import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
