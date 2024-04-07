import {  Outlet } from "react-router-dom";

import HostLayout from "./Components/Host-Layout/HostLayout";

export const Host = () => {
  return (
          <div className="container mx-auto mt-8">
                <HostLayout/>
                <div className="m-4 p-4">
                    <Outlet/>
                </div>

          </div>
  );
};

export default Host;
