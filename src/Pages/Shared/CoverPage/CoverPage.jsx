import "./CoverPage.css"

const CoverPage = ({ title, subTitle, bgImg,titleStyle }) => {
  return (
    <div
      className="hero min-h-[400px] lg:min-h-[800px]"
      style={{
        backgroundImage: `url("${bgImg}")`,
      }}
    >
      <div className="coverPage-overlay h-1/2 w-3/4 lg:w-1/2 bg-[#15151599] bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className={`mb-5 text-3xl lg:text-7xl font-bold uppercase font-cinzel ${titleStyle}`}>{title}</h1>
          <p className="mb-5 uppercase text-sm lg:text-base">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
