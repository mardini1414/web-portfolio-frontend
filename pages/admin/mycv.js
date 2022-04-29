import DashboardLayout from '../../components/DashboardLayout';
import Input from '../../components/Input';
import { useState } from 'react';
import axios from 'axios';
import Alert from '../../components/Alert';
import Spinner from '../../components/Spinner';
import { useRouter } from 'next/router';

function Mycv() {
  const [cv, setCv] = useState('');
  const [error, setError] = useState({ cv: null });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function download() {
    const res = await axios.get('api/download/cv', {
      responseType: 'blob',
      headers: { Accept: 'application/pdf' },
    });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'mycv.pdf');
    document.body.appendChild(link);
    link.click();
  }

  async function upload(e) {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    if (typeof cv === 'object') formdata.append('cv', cv);
    const res = await axios({
      url: 'api/upload/cv',
      method: 'POST',
      data: formdata,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    });

    switch (res.status) {
      case 200:
        setMessage(res.data.message);
        setError({ cv: null });
        break;
      case 422:
        setMessage(null);
        setError(res.data.errors);
        break;
      case 401:
        router.push('/login');
        break;
      default:
        setMessage('Opp something wrong!');
        break;
    }
    setLoading(false);
  }
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center min-h-screen h-max">
        <div className="w-full max-w-sm p-4 bg-white rounded-md shadow-sm">
          <span
            className="block pb-2 mb-4 text-xs font-light text-right text-gray-400 border-b cursor-pointer "
            onClick={download}
          >
            <i className="text-xs fa-solid fa-eye"></i> Preview
          </span>
          {message && <Alert text={message} type="success" />}
          <h2 className="my-4 font-semibold text-center text-blue-400 ">
            Upload your cv
          </h2>
          <form onSubmit={upload} className="grid gap-2">
            <Input
              type={'file'}
              className="font-light text-gray-400 border-none file:bg-blue-100 file:border-none file:rounded-lg file:px-3 file:py-2 file:text-blue-400"
              onChange={(e) => setCv(e.target.files[0])}
            />
            {error.cv && <div className="text-red-500">{error.cv[0]}</div>}
            <button
              type="submit"
              disabled={loading}
              className="py-1 mt-2 text-white transition duration-300 bg-blue-500 rounded-md focus:outline-none hover:bg-blue-400"
            >
              {loading ? <Spinner /> : 'Upload'}
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Mycv;
