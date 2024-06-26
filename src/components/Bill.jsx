import { bill } from "../assets";
import CommonTitle from "./CommonTitle";

const Bill = () => {
  return (
    <section id="about us" className="relative font-poppins py-10 sm:py-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-5">
        <div className="flex-1">
          <img
            src={bill}
            alt="bill"
            className="w-full h-full object-contain md:object-fill"
          />
        </div>

        <div className="flex flex-col gap-5 md:gap-10 flex-1">
          <CommonTitle title="We believe in the power of storytelling" />
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg">
          We are a passionate team of marketing, design, and printing professionals dedicated 
          to helping businesses and individuals tell their unique stories and create beautiful, functional spaces.
          </p>
          <p className="text-dimWhite mt-5 text-base ss:text-lg">
          Ready to tell your story and design your dream space?  Contact Steward Digital today for a free consultation!
          </p>
          <div className="flex items-center gap-5">
            {/* <img src={appstore} alt="app store" />
            <img src={playstore} alt="play store" /> */}
          </div>
        </div>
      </div>
      <div className="absolute w-[20%] h-[60%] rounded-full left-0 top-20 pink__gradient"></div>
    </section>
  );
};

export default Bill;
