import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="mt-32"
      style={{
        background: `linear-gradient(
  to right,
  #1F2937 0%,
  #1F2937 50%,
  #111827 50%,
  #111827 100%
)`,
      }}
    >
      <div className="container mx-auto flex justify-evenly items-start text-white py-24">
        <div className="text-center">
          <p className="font-medium text-3xl uppercase mb-6">Contact US</p>
          <div className="text-xl font-normal space-y-3">
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789 </p>
          <p>Mon - Fri: 08:00 - 22:00 </p>
          <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div>
          <div className="text-center space-y-6">
            <p className="font-medium text-3xl capitalize">Follow US</p>
            <p>Join us on social media</p>
            <div className="grid grid-flow-col gap-4">
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
