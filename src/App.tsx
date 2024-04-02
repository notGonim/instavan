import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './Shared/Components/Nav/Nav';
import './server';
import React, { Suspense } from 'react';


const Home = React.lazy(() => import('./Pages/Home/Home'));
const About = React.lazy(() => import('./Pages/About/About'));
const Vans = React.lazy(() => import('./Pages/Vans/Vans'));
const Van = React.lazy(() => import('./Pages/Vans/Components/Van/Van'));

function App() {
  return (
    <>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<Van />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;