import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
import './SingleTest.css'

const SingleTest = ({ testimonial }) => {
  const { name, rating, details } = testimonial;
  return (
    <div className="flex flex-col justify-center items-center px-32">
      <Rating value={rating} readOnly style={{ maxWidth: 270 }} />
      <div className="my-12">
        <FaQuoteLeft size={100} />
      </div>
      <p className="text-xl text-dark-02 ">{details}</p>
      <p className="text-3xl font-medium text-boss-title mt-2">{name}</p>
    </div>
  );
};

export default SingleTest;
