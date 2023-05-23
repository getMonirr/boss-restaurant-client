const SectionHeading = ({ title, heading, className }) => {
  return (
    <div className="text-center mt-20 mb-12 max-w-md mx-auto px-3">
      <p className="italic font-normal lg:text-xl text-boss-title mb-2">
        ---{title}---
      </p>
      <h2
        className={`font-normal text-3xl lg:text-[40px] uppercase border-y-4 p py-2 ${className}`}
      >
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeading;
