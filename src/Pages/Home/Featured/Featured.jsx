import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import FeaturedImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="pb-32 pt-4 mt-32 bg-fixed"
      style={{
        background: `linear-gradient(0deg, rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)), url(${FeaturedImg})`,
        backgroundAttachment: "fixed",
      }}
    >
      <SectionHeading
        className={"text-white"}
        title={"Check It Out"}
        heading={"Form Our menu"}
      />
      <div className="container mx-auto flex justify-evenly items-center text-white gap-16">
        <div>
          <img src={FeaturedImg} alt="Featured img" />
        </div>
        <div>
          <h3>March 20, 2023</h3>
          <h2>WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-[3px] px-8 transition-all border-b-white text-white hover:bg-white hover:text-black hover:border-b-white mt-6">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
