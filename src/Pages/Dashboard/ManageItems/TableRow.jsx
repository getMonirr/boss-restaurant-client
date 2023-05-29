import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const TableRow = ({ item, index }) => {
  const { image, name, price, _id } = item;
  const { refetch } = useCart();

  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_FETCH_URL}/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={name} />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <th>
        <button className="btn btn-ghost bg-boss-admin">
          <FaRegEdit className="h-[24px] w-[24px] text-white" />
        </button>
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost bg-[#B91C1C]"
        >
          <FaTrashAlt className="h-[24px] w-[24px] text-white" />
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
