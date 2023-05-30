import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery("users", async () => {
    const res = await axiosSecure.get(`/users`);

    return res.data;
  });

  // handle make admin
  const handleMakeAdmin = (id) => {
    fetch(`${import.meta.env.VITE_FETCH_URL}/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          console.log("user is admin now");
        }
      });
  };

  return (
    <>
      <SectionHeading
        className="mx-auto"
        title="How many?"
        heading="manage all Users"
      />
      <h3 className="font-cinzel font-bold my-5 text-3xl uppercase">
        Total Users: {users?.length}
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-boss-admin text-white"></th>
              <th className="bg-boss-admin text-white">User Name</th>
              <th className="bg-boss-admin text-white">User Email</th>
              <th className="bg-boss-admin text-white">Roll</th>
              <th className="bg-boss-admin text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <th>
                  {user?.role === "admin" ? (
                    <p>Admin</p>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user?._id)}
                      className="btn btn-ghost bg-boss-admin"
                    >
                      <FaUsers className="h-[24px] w-[24px] text-white" />
                    </button>
                  )}
                </th>
                <th>
                  <button className="btn btn-ghost bg-[#B91C1C]">
                    <FaTrashAlt className="h-[24px] w-[24px] text-white" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
