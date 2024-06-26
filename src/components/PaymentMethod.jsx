import { card } from "../assets";
import CommonButton from "./CommonButton";
import CommonTitle from "./CommonTitle";
import { FaStar } from "react-icons/fa";

const Steps = ({ title }) => {
  return (
    <p className="text-sm sm:text-base md:text-lg text-dimWhite flex items-center gap-2">
      <span>
        <FaStar className="text-secondary -mt-1 text-base" />
      </span>
      <span>{title}</span>
    </p>
  );
};

const PaymentMethod = () => {
  return (
    <section id="portfolio" className="py-10 sm:py-16 font-poppins">
      <div className="flex md:flex-row flex-col gap-10">
        <div className="flex flex-col gap-7 sm:gap-10 flex-1">
          <CommonTitle title="Projects that speaks volume." />
          <div className="flex flex-col gap-3">
            <Steps title="Increased website traffic, leads, and sales through SEO & social media" />
            <Steps title="Eye-catching logos, websites, and marketing materials" />
            <Steps title="Satisfied clients leveraging our custom AI software and marketing tools" />
          </div>
          <CommonButton btnText="See Projects" />
        </div>

        <div className="flex-1">
          <img
            src={card}
            alt="card payment method"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
