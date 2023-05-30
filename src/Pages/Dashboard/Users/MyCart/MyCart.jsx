import useCart from "../../../../Hooks/useCart";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import TableRow from "../../Admin/ManageItems/TableRow";

const MyCart = () => {
  const { cart } = useCart();

  const price = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <>
      <SectionHeading
        className="mx-auto"
        title="My Cart"
        heading="Wanna add more?"
      />
      <div className="flex justify-between items-center">
        <h3 className="font-cinzel font-bold my-5 text-3xl uppercase">
          Total Items: {cart?.length}
        </h3>
        <h3 className="font-cinzel font-bold my-5 text-3xl uppercase">
          Total Price: ${price}
        </h3>
        <button className="btn btn-ghost bg-boss-admin">Pay</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-boss-admin text-white"></th>
              <th className="bg-boss-admin text-white">Item image</th>
              <th className="bg-boss-admin text-white">Item name</th>
              <th className="bg-boss-admin text-white">Price</th>
              <th className="bg-boss-admin text-white">Action</th>
              <th className="bg-boss-admin text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <TableRow key={item._id} item={item} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyCart;
