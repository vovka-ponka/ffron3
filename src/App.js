import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/index.jsx';
import { Header } from './components/Header/index.jsx';
import { Login } from './pages/Login/index.jsx';
import { Registration } from './pages/Registration/index.jsx';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        }
      </Container>
    </>
  );
}

export default App;
