import { useQuery } from "react-query";

const useCart = () => {
  const { data: cart = [] } = useQuery("carts", async () => {
    const res = await fetch(`${import.meta.env.VITE_FETCH_URL}/carts`);
    return await res.json();
  });
  return { cart };
};
export default useCart;
