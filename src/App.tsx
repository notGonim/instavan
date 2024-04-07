import { Route, Routes } from 'react-router-dom';
import './App.css';
import './server';
import React, { Suspense } from 'react';
import Layout from './Shared/Components/Layout/Layout';



const Home = React.lazy(() => import('./Pages/Home/Home'));
const About = React.lazy(() => import('./Pages/About/About'));
const Vans = React.lazy(() => import('./Pages/Vans/Vans'));
const Van = React.lazy(() => import('./Pages/Vans/Components/Van/Van'));
const Host = React.lazy(() => import('./Pages/Host/Host'));
const Income = React.lazy(() => import('./Pages/Host/Components/Income/Income'));
const Reviews = React.lazy(() => import('./Pages/Host/Components/Reviews/Reviews'));
const Dashboard = React.lazy(() => import('./Pages/Host/Components/Dashboard/Dashboard'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="host" element={<Host />} >
                  <Route index element={<Dashboard/>} />
                  <Route path="income" element={<Income/>} />
                  <Route path='reviews' element={<Reviews/>} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<Van />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;