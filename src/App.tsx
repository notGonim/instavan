import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Nav } from './Shared/Components/Nav/Nav';

function App() {
  return (
<>
<Nav/>
<Routes>
<Route path="/" element={<Home />} />
<Route path='/about' element={<About/>} />
  </Routes>
</>
  );
}

export default App;
