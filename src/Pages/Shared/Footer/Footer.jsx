import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-16 lg:mt-32">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-evenly lg:items-start gap-20 lg:gap-0 text-white py-24">
        <div className="text-center">
          <p className="font-medium text-2xl lg:text-3xl uppercase mb-6">
            Contact US
          </p>
          <div className="lg:text-xl font-normal space-y-3">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789 </p>
            <p>Mon - Fri: 08:00 - 22:00 </p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="text-center space-y-3 lg:space-y-6">
          <p className="font-medium text-2xl lg:text-3xl capitalize">
            Follow US
          </p>
          <p>Join us on social media</p>
          <div className="grid grid-flow-col justify-center gap-8 lg:gap-4">
            <Link to="">
              <FaFacebookF size={35} />
            </Link>
            <Link to="">
              <FaInstagram size={35} />
            </Link>
            <Link to="">
              <FaTwitter size={35} />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-dark-01 text-white">
        <div>
          <p>
            Copyright © 2023 - All right reserved by Bistro Boss Restaurant Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
