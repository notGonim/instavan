import { useParams } from "react-router-dom";

export const Van = () => {

    const {id} = useParams();

  return <div>Van component {id}</div>;
};

export default Van;
 