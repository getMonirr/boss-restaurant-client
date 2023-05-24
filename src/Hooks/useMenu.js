import { useEffect, useState } from "react";

const useMenus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_FETCH_URL}/menus`)
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return { menus };
};

export default useMenus;
