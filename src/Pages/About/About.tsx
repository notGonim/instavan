import React from 'react';
import { Link } from 'react-router-dom';

export const About = () => {
	return (
		<div className="flex flex-col min-h-full  ">
			<img src="./images/about-hero.png" alt="About us" className="w-full h-96 " />
			<div className=" px-8 text-gray-700 mb-14 ">
				<h1 className="line-height-9 py-4 ">Don’t squeeze in a sedan when you could relax in a van.</h1>
				<p className="leading-5 py-2">
					Our mission is to enliven your road trip with the perfect travel van rental. Our vans are
					recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs
					extra 😉)
				</p>
				<p className="leading-5 py-2">
					Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4
					wheels.
				</p>
			</div>
			<div className=" bg-yellow-200 text-gray-700 px-8 pb-8 mx-6 my-6 rounded-lg">
				<h2 className="my-0 py-10">
					Your destination is waiting.
					<br />
					Your van is ready.
				</h2>
				<Link className="link-button bg-gray-900 text-white rounded-lg px-4 py-2" to="/vans">
					Explore our vans
				</Link>
			</div>
		</div>
	);
};


export default About;