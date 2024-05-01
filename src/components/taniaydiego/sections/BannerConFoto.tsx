import React from "react";

const BannerConFoto = () => {
  return (
    <div
      className="
        bg-[url('/assets/images/Taniaydiego/banner_desk.jpg')]
        cell:bg-[url('/assets/images/Taniaydiego/banner_cell.jpg')]
        w-full h-[600px] bg-center bg-fixed
        bg-no-repeat bg-cover 
        cell:h-[100vh]
    "
    ></div>
  );
};

export default BannerConFoto;
