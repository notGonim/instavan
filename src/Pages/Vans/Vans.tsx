import React from 'react';
import { Link } from 'react-router-dom';
import { useGetVansQuery } from '../../Store/services/Vans';

export const Vans = () => {
  const { data, isLoading } = useGetVansQuery([]);

  
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 className="my-6 text-3xl font-semibold max-w-7xl mx-auto p-4">Explore Our Vans And Live the Moment</h1>
          <hr className="text-3xl font-semibold max-w-7xl mx-auto p-4"/>
          {data?.vans.map((van: any) => (
            <div key={van.id} className="max-w-7xl mx-auto p-4">
              <div className="flex items-center space-x-4">
                <img
                  src={van.imageUrl}
                  alt={van.name}
                  className="w-1/3 h-1/3 rounded-lg"
                />
                <div>
                  <h2 className="text-2xl font-bold mt-2">{van.name}</h2>
                  <p className="text-lg mt-2">{van.description}</p>
                  <p className="text-lg mt-2">
                    {van.price}$ / <span>Day</span>
                  </p>
                  <Link
                    to={`/vans/${van.id}`}
                    className="mt-8 leading-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {van.type}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Vans;
