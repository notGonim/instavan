import { Truck } from 'lucide-react';
import { Link } from 'react-router-dom';


export const Nav = () => {
  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-black font-extrabold text-xl uppercase max-w-xs mr-auto flex items-center"><Truck/> 
        <Link to='/'  className="ml-2 text-2xl font-bold">InstaVan</Link>
        </div>
        <div className="flex space-x-4 ">
          {/* <Link to="/" className="text-xl">Home</Link> */}
          <Link to="/about" className="text-xl">About</Link>
          <Link to="/vans" className="text-xl">Vans</Link>
        </div>
      </div>
    </nav>
  );
};
