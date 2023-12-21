import Dashboard from './pages/Dashboard/Dashboard';
import Experience from './pages/Experience/Experience';
import Info from './pages/Info/Info';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/info' element={<Info />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
