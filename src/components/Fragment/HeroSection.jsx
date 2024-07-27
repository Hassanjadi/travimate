import React from "react";
import HeroImage from "../../assets/hero-image.png";

export const HeroSection = () => {
  return (
    <div className="bg-[#3E7BFA] rounded-b-[72px] px-12 min-h-screen relative">
      <div className="flex gap-8 items-center">
        <div className="flex flex-col justify-center min-h-screen w-1/2">
          <p className="font-semibold italic text-2xl text-white">
            #KawanSetiaPerjalananmu
          </p>
          <h1 className="text-[32px] font-bold text-white">
            Pesan Tiket Pesawat Jadi Lebih <br />
            <span className="text-[#F1A025]">Menyenangkan</span>
          </h1>
        </div>
        <div className="hero-image w-1/2">
          <img
            src={HeroImage}
            className="bg-cover fluid w-[55%] absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};
