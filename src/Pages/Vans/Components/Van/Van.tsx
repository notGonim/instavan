import { useParams } from "react-router-dom";
import { useGetVanQuery } from "../../../../Store/services/Vans";

export const Van = () => {

    const {id} = useParams();
    const { data, isLoading } = useGetVanQuery(id);
  
    if (!id || !data?.vans ) {
      return <p className=" my-14 text-3xl font-semibold max-w-7xl mx-auto p-4 flex items-center justify-center">Van not found</p>;
    }
  
    return (
    <>
    {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
           <h1 className="my-6 text-3xl font-semibold max-w-7xl mx-auto p-4">{data?.vans?.name}</h1>
           <hr className="text-3xl font-semibold max-w-7xl mx-auto p-4"/>
           <div key={data?.vans?.id} className="max-w-7xl mx-auto p-4">
             <div className="flex items-center space-x-4">
               <img
                 src={data?.vans?.imageUrl}
                 alt={data?.vans?.name}
                 className="w-1/3 h-1/3 rounded-lg"
               />
               <div>
                 <h2 className="text-2xl font-bold mt-2">{data?.vans?.name}</h2>
                 <p className="text-lg mt-2">{data?.vans?.description}</p>
                 <p className="text-lg mt-2">
                   {data?.vans?.price}$ / <span>Day</span>
                 </p>
               </div>
             </div>
           </div>

    
    </>
    )}
    </>
  )
};

export default Van;
 