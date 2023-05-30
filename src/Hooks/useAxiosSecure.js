import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();
  
  const axiosSecure = axios.create({
    baseURL: "http://localhost:3500",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("boss-access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // Perform logout and redirection here
          await logOutUser();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, logOutUser, axiosSecure]);

  return axiosSecure;
};

export default useAxiosSecure;

// import { useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

// const useAxiosSecure = () => {
//   const { logOut } = useAuth();
//   const navigate = useNavigate();

//   const axiosSecure = axios.create({
//     baseURL: "http://localhost:3500",
//   });

//   useEffect(() => {
//     axiosSecure.interceptors.request.use((config) => {
//       const token = localStorage.getItem("boss-access-token");
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     });

//     axiosSecure.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         if (
//           error.response &&
//           (error.response.status === 401 || error.response.status === 403)
//         ) {
//           await logOut();
//           navigate("/login");
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, [logOut, navigate, axiosSecure]);

//   return axiosSecure;
// };

// export default useAxiosSecure;
