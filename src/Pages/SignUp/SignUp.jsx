import { useForm } from "react-hook-form";

import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

import loginBg from "../../assets/others/authentication.png";
import loginBanner from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
  const { googleSignIn, createUser, updateUserInfo } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // create user
    if (data.email && data.password) {
      createUser(data.email, data.password)
        .then((result) => {
          console.log(result.user);

          // update/set user name
          if (result.user) {
            updateUserInfo(result.user, data.name)
              .then(() => {
                console.log(result.user, "successful");
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ background: `url("${loginBg}")` }}
    >
      <div className=" flex flex-col-reverse lg:flex-row-reverse justify-evenly items-center w-full container mx-auto px-3 lg:px-0 gap-8">
        <div className="">
          <img src={loginBanner} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg bg-transparent">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="text-center">
              <h3 className="text-4xl font-bold">Sign up</h3>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">
                  Name <span className="text-red-500 font-bold">*</span>{" "}
                </span>
              </label>
              <input
                {...register("name", { required: true })}
                type="name"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  Password is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">
                  Email <span className="text-red-500 font-bold">*</span>{" "}
                </span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  Password is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">
                  Password <span className="text-red-500 font-bold">*</span>{" "}
                </span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1">
                  Password is required
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary border-none capitalize"
                style={{ background: "rgba(209, 160, 84, 0.7)" }}
              >
                Sign Up
              </button>
            </div>
            <div className="text-center">
              <p className="text-boss-rating my-6">
                Already Registered?{" "}
                <Link to="/login" className="text-boss-title font-bold">
                  Go to login
                </Link>
              </p>
              <p>Or sign up with</p>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
