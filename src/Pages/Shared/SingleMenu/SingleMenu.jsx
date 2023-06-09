const SingleMenu = ({ menu }) => {
  const { name, recipe, image, price } = menu;
  return (
    <div className="flex gap-6 flex-col lg:flex-row py-6 lg:py-0">
      <div className="h-[104px] w-[118px]">
        <img
          className="h-[104px] w-[118px]"
          style={{ borderRadius: "0px 200px 200px 200px" }}
          src={image}
          alt={name}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <h4 className="font-cinzel text-lg lg:text-xl text-dark-01 font-normal uppercase mb-2">{name} <span className="hidden lg:block">--------------------------</span></h4>
          <p className="font-normal text-xl text-boss-title">${price}</p>
        </div>
        <p className="text-sm lg:text-base font-normal text-dark-03 lg:pr-16">{recipe}</p>
      </div>
    </div>
  );
};

export default SingleMenu;
