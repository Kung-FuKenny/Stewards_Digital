import { footerLinks } from "../utils";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const SocialMedia = ({ icon, name, link }) => {
  return (
    <a href={link} className="relative social-icon">
      <span className="social-media-icon mt-8 ss:mt-0 p-3 xs:py-4 xs:px-4 ss:px-[1.03rem] text-black block rounded-full z-2 ss:absolute top-1/2 left-0 -translate-y-1/2">
        {icon}
      </span>
      <span className="hidden ss:block social-name text-base font-[500] capitalize bg-white text-black rounded-full transition-all py-[0.9rem] px-[1.6rem] hover:px-16 cursor-pointer z-1 overflow-hidden">
        {name}
      </span>
    </a>
  );
};

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="relative font-poppins pb-10 sm:pb-16">
      <div className="flex items-start md:flex-row flex-col gap-10 md:gap-24">
        <div className="md:max-w-[370px]">
        <h2 className="font-photograph text-[2rem]">
  Stewards Digital
</h2>
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg mt-5">
           Architects of Excellence.
          </p>
        </div>
        <div className="w-full md:flex-1 flex items-start ss:justify-between gap-10 ss:gap-5 ss:flex-nowrap flex-wrap">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold">{item.title}</h3>
              <ul className="flex flex-col gap-3 xs:gap-5 text-dimWhite mt-5">
                {item.links.map((link, index) => (
                  <a key={index} href={link.link} target="_blank" rel="noreferrer">
                    <li className="text-[.9rem] font-[500] hover:text-secondary">
                      {link.name}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between md:flex-row flex-col gap-5 pt-10 mt-10 sm:mt-16 border-t">
        <p className="md:text-base xs:text-sm text-xs">
          Copyright Ⓒ {date} Stewards Digital All Rights Reserved.
        </p>
        <div>
          <div className="flex items-center gap-3 xs:gap-5 text-lg xs:text-xl">
          <SocialMedia
              icon={<FaLinkedinIn />}
              name="linkedin"
              link="https://www.linkedin.com"
            />
            <SocialMedia
              icon={<FaFacebook />}
              name="facebook"
              link="https://facebook.com"
            />
            <SocialMedia
              icon={<RiInstagramFill />}
              name="instagram"
              link="https://instagram.com"
            />
            <SocialMedia
              icon={<IoLogoTiktok />}
              name="tiktok"
              link="https://tiktok.com"
            />
            <SocialMedia
              icon={<IoLogoWhatsapp />}
              name="whatsapp"
              link="https://www.whatsapp.com"
            />
            <SocialMedia
              icon={<FaTelegram />}
              name="telegram"
              link="https://www.telegram.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
