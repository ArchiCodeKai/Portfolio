import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-54 bg-night pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-firasans font-semibold text-xl text-yellow">
            Kai Tseng
          </p>
          <p className="font-firasans text-md text-yellow">
            ©2023 TSENG. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
