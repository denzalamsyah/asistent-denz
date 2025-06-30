import { heroBackground } from "../assets";
import google from "../assets/google.svg"; // pastikan ini benar
import Section from "../components/Section";

const Register = () => {
  return (
    <Section
      className="min-h-screen flex flex-col items-center justify-center px-4"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
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
      <h1 className="relative mb-6 text-lg md:text-2xl font-bold text-center text-white">
        Denz Think - Register
      </h1>
      {/* Register Form */}
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

        <div className="mb-4">
          <label className="block mb-2 text-xs text-white">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full text-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-400 bg-transparent text-white placeholder:text-gray-300"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-xs text-white">
            Confirm Password
          </label>
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
          Sign Up
        </button>

        <p className="text-[10px] text-center text-white mb-2">
          Already have an account?{" "}
          <a className="text-blue-400 underline" href="/login">
            Login
          </a>
        </p>

        <p className="text-[10px] text-center text-white mb-4">
          Forgot password?{" "}
          <a className="text-blue-400 underline" href="/change-password">
            Reset it
          </a>
        </p>

        <button
          type="button"
          onClick={() =>
            (window.location.href =
              "http://localhost:8000/auth/redirect/google")
          }
          className="w-full border border-white/40 text-white py-2 rounded-lg hover:bg-white/10 transition-colors flex justify-center items-center gap-3"
        >
          <img src={google} alt="Google" className="w-5 h-5" />
          <span className="text-xs md:text-sm">Sign Up with Google</span>
        </button>
      </form>
    </Section>
  );
};

export default Register;
