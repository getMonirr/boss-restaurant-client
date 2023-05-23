import BannerImg from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div className="container mx-auto">
      <div
        className=" py-36 px-32 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${BannerImg})`,
        }}
      >
        <div className="py-24 px-40 bg-white text-center">
          <h2 className="font-cinzel text-5xl uppercase text-dark-01 mb-4">
            Bistro Boss
          </h2>
          <p className="text-dark-01 text-justify">
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
