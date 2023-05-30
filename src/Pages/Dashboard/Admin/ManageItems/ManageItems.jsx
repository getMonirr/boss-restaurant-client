import useCart from "../../../../Hooks/useCart";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import TableRow from "./TableRow";

const ManageItems = () => {
  const { cart } = useCart();

  // TODO: it is a wrong info here, all data is user data

  return (
    <>
      <SectionHeading
        className="mx-auto"
        title="Hurry Up"
        heading="manage all items"
      />
      <h3 className="font-cinzel font-bold my-5 text-3xl uppercase">
        Total Items: {cart?.length}
      </h3>
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

export default ManageItems;
