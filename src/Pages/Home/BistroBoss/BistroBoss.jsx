import BannerImg from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div className="container mx-auto px-3 lg:px-0 my-8 lg:my-0">
      <div
        className=" py-16 lg:py-36 px-8 lg:px-32 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${BannerImg})`,
        }}
      >
        <div className="p-4 lg:py-24 lg:px-40 bg-white text-center">
          <h2 className="font-cinzel text-3xl lg:text-5xl uppercase text-dark-01 mb-4">
            Bistro Boss
          </h2>
          <p className="text-dark-01 text-justify text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Necessitatibus, libero accusamus
            laborum deserunt ratione dolor officiis praesentium! Deserunt magni
            aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam
            nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
