import { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import useApp from "../../Hooks/useApp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const request = useAxios();
  const { setMember, setToken } = useApp();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email required");
    if (!password) return toast.error("Password required");

    const res = await request({
      method: "POST",
      url: "users/login",
      data: { email, password },
    });
    if (res._error) return;

    const accessToken = res.responseData.access_token;
    setToken(accessToken);

    const me = await request({
      url: "users/me",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (me._error) return;

    setMember(me.responseData);
    toast.success("Logged in");
    navigate("/product");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignIn}
        className="w-full max-w-sm bg-white p-8 rounded-lg shadow"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded"
          >
            Login
          </button>
        </div>
        <p className="text-sm text-center mt-4">
          No account?{" "}
          <Link to="/sign_up" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;