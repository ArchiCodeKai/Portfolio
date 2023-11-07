const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/kai-tseng-355b71200/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/kaikaitalk/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram" src="../assets/instagram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/kai-tseng-355b71200/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://line.me/ti/p/l2HElihwSi"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="line-link" src="../assets/line.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
