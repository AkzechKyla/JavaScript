// credits to: https://medium.com/@MasambuOfficial/how-to-implement-a-signup-page-with-react-tailwind-css-and-strapi-io-78e4ccec97c0
import { useState } from 'react';

const SignupForm = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:1337/api/auth/local/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: fullname,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Signup successful!');
      } else {
        alert(data.message[0].messages[0].message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up');
    }
  };

  return (
    <div className="min-h-screen bg-[#282b30] bg-cover bg-center flex items-center justify-center">
      <div className="bg-[#36393e] p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#F2F3F5]">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#B5BAC1] font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border-0 rounded-md bg-[#1e2124] text-gray-300 focus:outline-none"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#B5BAC1]">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border-0 rounded-md bg-[#1e2124] text-gray-300 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#B5BAC1]">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border-0 rounded-md bg-[#1e2124] text-gray-300 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#B5BAC1]">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border-0 rounded-md bg-[#1e2124] text-gray-300 focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/signin" className="text-blue-500">Already have an account? Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
