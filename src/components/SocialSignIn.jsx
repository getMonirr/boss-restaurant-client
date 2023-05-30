import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialSignIn = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        if (result.user) {
          navigate(from, { replace: true });
          const users = {
            email: result.user.email,
            name: result.user.displayName,
          };
          fetch(`${import.meta.env.VITE_FETCH_URL}/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(users),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-between items-center max-w-[200px] mx-auto mt-4">
      <div className="bg-[#F1F2F4] border-2 border-dark-02 rounded-full p-3 cursor-pointer">
        <FaFacebookF />
      </div>
      <div
        onClick={handleGoogleSignIn}
        className="bg-[#F1F2F4] border-2 border-dark-02 rounded-full p-3 cursor-pointer"
      >
        <FaGoogle />
      </div>
      <div className="bg-[#F1F2F4] border-2 border-dark-02 rounded-full p-3 cursor-pointer">
        <FaGithub />
      </div>
    </div>
  );
};

export default SocialSignIn;
