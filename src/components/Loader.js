import React from "react";
import LoaderImg from ".././assets/loader.svg";

const Loader = () => {
  return (
    <div className="mx-auto mt-20 w-56 bg-white">
      <img src={LoaderImg} alt="loader" />
    </div>
  );
};

export default Loader;
