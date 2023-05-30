import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const axiosSecure = useAxiosSecure();

  const { user, loading } = useAuth();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["carts"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return { cart, refetch };
};
export default useCart;

// const res = await fetch(
//   `${import.meta.env.VITE_FETCH_URL}/carts?email=${user?.email}`,
//   {
//     headers: {
//       authorization: `Bearer ${localStorage.getItem("boss-access-token")}`,
//     },
//   }
// );
// return await res.json();
