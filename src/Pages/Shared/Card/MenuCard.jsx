const MenuCard = ({ recommend }) => {
  const { name, recipe, image } = recommend;
  return (
    <div className="card w-full bg-dark-07 shadow-xl">
      <figure>
        <img
          className="w-full object-fill object-center"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-[3px] px-8 transition-all bg-dark-06 border-b-boss-cart-btn text-boss-cart-btn hover:text-boss-cart-btn mt-6">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
