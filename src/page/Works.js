import React from "react";
import { Link, useLocation } from "react-router-dom";

const Works = () => {
    const location = useLocation();
    console.log("location", location);
    return <div>
        {`Current Page`}
      <div>{`Current Page : ${location.pathname}`}</div>
      <Link to={'/contact'}>Go to the contact page</Link>
    </div>;
}
export default Works;