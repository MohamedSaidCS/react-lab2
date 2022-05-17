import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ShowStudent from './components/ShowStudent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/students/:id" element={<ShowStudent/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
