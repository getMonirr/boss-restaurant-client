import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const MenuCard = ({ recommend }) => {
  // use custom hooks
  const { user } = useAuth();
  const { refetch } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const { name, recipe, image, _id, price } = recommend;
  // handle add to cart
  const handleAddToCart = (id) => {
    if (!user && !user?.email) {
      Swal.fire({
        title: "Please login",
        text: "You have to login first to add cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("../login", { state: { from: location } });
        }
      });
      return;
    }

    // set item to cart
    const cartItem = { menuId: id, name, image, price, email: user?.email };
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    };
    fetch(`${import.meta.env.VITE_FETCH_URL}/carts`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          refetch();
          Swal.fire("add successful", "see your cart", "success");
        }
      });
  };

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
          <button
            onClick={() => handleAddToCart(_id)}
            className="btn btn-outline border-0 border-b-[3px] px-8 transition-all bg-dark-06 border-b-boss-cart-btn text-boss-cart-btn hover:text-boss-cart-btn mt-6"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
