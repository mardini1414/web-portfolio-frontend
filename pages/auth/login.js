import axios from 'axios';
import { useRouter } from 'next/router';
import Alert from '../../components/Alert';
import Input from '../../components/Input';
import { useState } from 'react';

function Login() {
  const [inputData, setInputData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: null, password: null });
  const [message, setMessage] = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.get('/sanctum/csrf-cookie');
      const res = await axios.post('/api/login', {
        email: inputData.email,
        password: inputData.password,
      });

      switch (res.status) {
        case 200:
          localStorage.setItem('user_token', res.data.token);
          router.push('/dashboard');
          setError({ email: null, password: null });
          break;
        case 401:
          setMessage(res.data.message);
          setError({ email: null, password: null });
          break;
        case 422:
          setMessage(null);
          setError({
            email: res.data.errors.email || null,
            password: res.data.errors.password || null,
          });
          break;
        default:
          setMessage('Opps something when wrong!');
          break;
      }
    } catch (error) {}
  }

  function getInputData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="form w-80">
        <div className="py-2 form-header">
          <h1 className="text-2xl font-semibold text-center text-blue-400">
            Login
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid gap-3 p-4 bg-white rounded-md shadow-sm form-body"
        >
          {message && <Alert type={'danger'} text={message} />}
          <label htmlFor="email" className="text-gray-400">
            Email
          </label>
          <Input type={'email'} onChange={getInputData} />
          {error.email && <div className="text-red-500">{error.email}</div>}
          <label htmlFor="password" className="text-gray-400">
            Password
          </label>
          <Input type={'password'} onChange={getInputData} />
          {error.password && (
            <div className="text-red-500">{error.password}</div>
          )}
          <button
            type="submit"
            className="py-1 mt-2 text-white transition duration-300 bg-blue-400 rounded-md focus:outline-none hover:bg-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
