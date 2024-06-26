import React from 'react';
import alphaomega from "../assets/alphaomega.png";
import ep from "../assets/ep.png";
import fullgospel from "../assets/fullgospel.png";
import kmm from "../assets/kmm.png";
import stewards from "../assets/stewards.png";
import tellasista from "../assets/tellasista.png";
import viva from "../assets/viva.png";
import CommonTitle from './CommonTitle';
import CommonButton from './CommonButton';

const ServiceCard = () => {
  const imgStyle = {
    width: '120px',
    height: 'auto',
  };

  return (
    <section className="font-poppins md:py-16 py-10">
      <div className="flex flex-col gap-10">
        <div className="brands-logo flex items-center sm:flex-nowrap flex-wrap w-full gap-10 text-6xl xs:text-7xl ss:text-8xl justify-center sm:text-[130px] text-[#5f5f5fb8] cursor-pointer">
          <img src={alphaomega} alt="Alpha Omega" style={imgStyle} className="hover:text-white" />
          <img src={ep} alt="EP" style={imgStyle} className="hover:text-white" />
          <img src={fullgospel} alt="Full Gospel" style={imgStyle} className="hover:text-white" />
          <img src={kmm} alt="KMM" style={imgStyle} className="hover:text-white" />
          <img src={stewards} alt="Stewards" style={imgStyle} className="hover:text-white" />
          <img src={tellasista} alt="Tella Sista" style={imgStyle} className="hover:text-white" />
          <img src={viva} alt="Viva" style={imgStyle} className="hover:text-white" />
        </div>

        <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 sm:items-center justify-between w-full bg-black-gradient-2 rounded-3xl p-6 ss:px-10 ss:py-10 md:px-16 md:py-7 my-10 md:my-16">
          <div>
            <CommonTitle title="Let's try our service now!" />
            <p className="max-w-[470px] mt-4 sm:mt-8">
              Everything you need to build a brand, solve your problem and grow your business anywhere on the planet.
            </p>
          </div>
          <div>
            <CommonButton btnText="get started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
