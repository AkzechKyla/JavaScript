import { useState } from 'react';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mockApiResponse = (email: string, password: string) => {
    // Simulate a successful login for a specific email and password
    if (email === "test@example.com" && password === "password123") {
      return { ok: true, message: "Login successful!" };
    } else {
      return { ok: false, message: "Invalid email or password." };
    }
  };

  // need to remove some unnecessary codes since this came from sign up form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (password !== confirmPassword) {
    //   alert('Passwords do not match!');
    //   return;
    // }

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      // const response = await fetch('http://localhost:1337/api/auth/local/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //   }),
      // });
      // const data = await response.json();

      const response = mockApiResponse(email, password);

      if (response.ok) {
        alert('Signup successful!');
      } else {
        // alert(data.message[0].messages[0].message);
        alert(response.message)
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up');
    }
  };

  return (
    <div className="min-h-screen bg-[#282b30] bg-cover bg-center flex items-center justify-center">
      <div className="bg-[#36393e] p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#F2F3F5]">Sign In</h2>
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/" className="text-blue-500">Need an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
