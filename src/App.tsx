// @ts-nocheck
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/home';

function App() {
  return (
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>    
  </>
  )
}

export default App;
