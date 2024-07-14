import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
        <p className="mt-4 text-2xl text-gray-700">Something went wrong.</p>
        <p className="mt-2 text-lg text-gray-500">
          The page you are looking for does not exist.
        </p>
      </div>
      <Link
        to="/"
        className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
