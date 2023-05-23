import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
import "./SingleTest.css";

const SingleTest = ({ testimonial }) => {
  const { name, rating, details } = testimonial;
  return (
    <div className="flex flex-col justify-center items-center px-3 lg:px-32">
      <Rating
        value={rating}
        readOnly
        style={{ maxWidth: 270 }}
        className="mobile-breakPoint"
      />
      <div className="my-6 lg:my-12">
        <FaQuoteLeft className="quoteIcon" />
      </div>
      <p className="text-base lg:text-xl text-dark-02 ">{details}</p>
      <p className="text-xl lg:text-3xl font-medium text-boss-title mt-2">{name}</p>
    </div>
  );
};

export default SingleTest;
