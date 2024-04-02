import { useGetVansQuery } from '../../Store/services/Vans';

export const Vans = () => {

	const {data, error, isLoading} = useGetVansQuery( [] )


	return (
		<>
		{isLoading ? <p>Loading...</p>:
			data?.vans.map((van: any) => (
				<div key={van.id} className="max-w-7xl mx-auto p-4">
					<div className="flex items-center space-x-4">
						<img src={van.imageUrl} alt={van.name} className="w-1/3 h-1/3 rounded-lg" />
						<div>
							<h2 className="text-2xl font-bold">{van.name}</h2>
							<p className="text-lg">{van.description}</p>
							<p className="text-lg">{van.price}</p>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Vans;
