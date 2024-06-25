import { FaPeopleGroup } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import CommonButton from "./CommonButton";
import CommonTitle from "./CommonTitle";

const BusinessCard = (props) => {
  const { icon, title, desc } = props;
  return (
    <>
      <div className="flex items-center gap-2 ss:p-7 ss:gap-5 p-3 sm:p-5 feature-card rounded-2xl ss:rounded-3xl hover:bg-black-gradient cursor-pointer">
        <div className="p-4 bg-dimBlue rounded-full">
          <span className="text-2xl ss:text-[2rem] text-secondary">{icon}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-base sm:text-lg font-semibold">
            {title}
          </h3>
          <p className="text-dimWhite text-xs sm:text-base">{desc}</p>
        </div>
      </div>
    </>
  );
};

const Business = () => {
  return (
    <section id="features" className="font-poppins pb-10 md:py-16">
      <div className="flex items-center flex-col md:flex-row gap-10 md:gap-10 ss:gap-16 justify-between">
        <div className="flex flex-col gap-8 ss:gap-12 flex-1">
          <CommonTitle title="You do the business, we'll handle the brand." />
          <p className="text-dimWhite text-base sm:text-lg">
          Stewards Digital is for all things digital marketing, graphic design, AI solutions, 
          and interior decor printing. We offer a range of services designed to help you:
          </p>
          <CommonButton btnText="get started" />
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <BusinessCard
            icon={<FaPeopleGroup />}
            title="Attract Customers"
            desc="SEO, social media marketing, content creation, and targeted advertising."
          />
          <BusinessCard
            icon={<MdDesignServices />}
            title="Build Your Brand"
            desc="Logo design, branding materials, website design, marketing collateral, high-quality printing for wall art, wallpaper, murals, signage, and more."
          />
          <BusinessCard
            icon={<FaRobot />}
            title="Leverage AI"
            desc="Custom AI software, AI marketing tools, and AI chatbots."
          />
        </div>
      </div>
    </section>
  );
};

export default Business;
