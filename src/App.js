import './App.css';
import NavBar from './NavBar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Courses from './pages/Courses';
import Home from './pages/Home';
import './styles.css';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
};


export default App;
