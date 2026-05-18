import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Faltas from './pages/Faltas';

function App() {
  const { autenticado } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={autenticado ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={autenticado ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/faltas"
          element={autenticado ? <Faltas /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;