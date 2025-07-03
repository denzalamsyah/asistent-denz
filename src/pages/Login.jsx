import { heroBackground } from "../assets";
import Section from "../components/Section";
import { google } from "../assets";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Section
      className="min-h-screen flex flex-col items-center justify-center px-4"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroBackground}
          className="w-full"
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>

      {/* Title */}
      <h2 className="relative mb-6 text-lg md:text-2xl font-bold text-center text-white">
        Denz Think
      </h2>

      {/* Login Form */}
      <form className="relative mx-auto w-full max-w-[300px] md:max-w-sm border bg-blue-950 bg-opacity-50 backdrop-blur p-8 rounded-lg shadow-lg">
        <h2 className="text-sm md:text-lg font-semibold mb-6 text-center text-white">
          Create an Account
        </h2>

        <div className="mb-4">
          <label className="block mb-2 text-xs text-white">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full text-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-400 bg-transparent text-white placeholder:text-gray-300"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-xs text-white">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full text-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-400 bg-transparent text-white placeholder:text-gray-300"
          />
        </div>

        <button
          type="submit"
          className="w-full text-xs md:text-sm bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-4"
        >
          Sign in
        </button>
        <div className="text-[10px] text-center">
          <p>
            Don{"`"}t have an account?{" "}
            <Link className="text-blue-500 underline" to="/register">
              Sign up
            </Link>
          </p>
        </div>
        <div className="mt-2 mb-4 text-[10px] text-center">
          <p>
            Forgot password?{" "}
            <Link className="text-blue-500 underline" to="/change-password">
              Reset it
            </Link>
          </p>
        </div>

        <button
          type="submit"
          className="w-full border text-white py-2 rounded-lg hover:bg-indigo-950 transition-colors flex justify-center items-center gap-5"
        >
          <img src={google} className="w-5" />
          <p className="text-xs md:text-sm">Sign in With Google</p>
        </button>
      </form>
    </Section>
  );
};

export default Login;
