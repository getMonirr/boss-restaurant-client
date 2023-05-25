import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

import "./Login.css";

import loginBg from "../../assets/others/authentication.png";
import loginBanner from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [isValid, setIsValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // validate captcha
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div
      className="hero min-h-screen"
      style={{ background: `url("${loginBg}")` }}
    >
      <div className=" flex flex-col lg:flex-row justify-evenly items-center w-full container mx-auto px-3 lg:px-0 gap-8">
        <div className="">
          <img src={loginBanner} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg bg-transparent">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="text-center">
              <h3 className="text-4xl font-bold">Login</h3>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
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
                <span className="label-text">Password</span>
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
            <div className="form-control relative mt-5 bg-white w-full h-12 rounded-lg border">
              <div className="absolute -bottom-5 left-1 space-y-4">
                <LoadCanvasTemplate />
              </div>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text mb-4"></span>
              </label>
              <input
                onBlur={handleValidateCaptcha}
                className="input input-bordered"
                placeholder="type here"
              />
              {errors.captcha && (
                <span className="text-red-500 text-sm mt-1">
                  Captcha is required
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                disabled={!isValid}
                type="submit"
                className="btn btn-primary border-none capitalize"
                style={{ background: "rgba(209, 160, 84, 0.7)" }}
              >
                Sign in
              </button>
            </div>
            <div className="text-center">
              <p className="text-boss-rating my-6">
                new here?{" "}
                <Link to="/sign-up" className="text-boss-title font-bold">
                  Create a account
                </Link>
              </p>
              <p>Or sign in with</p>
              <div className="flex justify-between items-center max-w-[200px] mx-auto mt-4">
                <div className="bg-[#F1F2F4] border-2 border-dark-02 rounded-full p-3 cursor-pointer">
                  <FaFacebookF />
                </div>
                <div className="bg-[#F1F2F4] border-2 border-dark-02 rounded-full p-3 cursor-pointer">
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

export default Login;
