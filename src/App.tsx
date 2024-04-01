import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Nav } from './Shared/Components/Nav/Nav';
import './server';
import { Fragment } from 'react/jsx-runtime';
import Vans from './Pages/Vans/Vans';
function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/vans" element={<Vans />} />
			</Routes>
		</>
	);
}

export default App;
