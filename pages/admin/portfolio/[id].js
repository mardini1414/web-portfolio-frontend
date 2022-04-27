import { useState } from 'react';
import Alert from '../../../components/Alert';
import DashboardLayout from '../../../components/DashboardLayout';
import Input from '../../../components/Input';
import Spinner from '../../../components/Spinner';
import axios from 'axios';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await axios.get(`/api/portfolio/${id}`);
  return {
    props: { data: res.data.data }, // will be passed to the page component as props
  };
}

function Edit({ data }) {
  const [inputData, setInputData] = useState(data);
  const [error, setError] = useState({
    name: null,
    link: null,
    github: null,
    description: null,
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  function handlePreview(e) {
    if (e.target.files.length > 0) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    } else {
      setPreview(null);
    }
  }

  function getInputData(e) {
    setInputData({
      ...inputData,
      [e.target.name]:
        e.target.name !== 'image' ? e.target.value : e.target.files[0],
    });
  }

  async function update(e) {
    e.preventDefault();
    try {
      const { name, link, github, description, image } = inputData;
      const formData = new FormData();
      formData.append('name', name);
      formData.append('link', link);
      formData.append('github', github);
      formData.append('description', description);
      formData.append('_method', 'put');

      if (typeof image === 'object') formData.append('image', image);

      setLoading(true);

      const res = await axios({
        url: `api/portfolio/update/${data.id}`,
        method: 'POST',
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_token')}`,
          Accept: 'application/json',
        },
      });

      switch (res.status) {
        case 200:
          setError({ name: null, link: null, github: null, image: null });
          setPreview(null);
          setMessage(res.data.message);
          break;
        case 401:
          setMessage(res.data.message);
          setError({ name: null, link: null, github: null, image: null });
          break;
        case 422:
          setMessage(null);
          setError(res.data.errors);
          break;
        default:
          setMessage('something when wrong!');
          break;
      }
      console.log(res.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-screen h-max">
        <div className="py-8"></div>
        <div className="w-full max-w-lg p-4 bg-white rounded-md shadow-sm">
          {message && <Alert text={message} type="success" />}
          <form onSubmit={update} className="grid gap-1 mt-4 ">
            <label htmlFor="name" className="text-gray-500">
              Name
            </label>
            <Input
              type={'text'}
              id={'name'}
              name={'name'}
              value={inputData.name}
              onChange={getInputData}
            />
            {error.name && <div className="text-red-500">{error.name[0]}</div>}
            <label htmlFor="link" className="text-gray-500">
              Link
            </label>
            <Input
              type={'text'}
              id={'link'}
              name={'link'}
              value={inputData.link}
              onChange={getInputData}
            />
            {error.link && <div className="text-red-500">{error.link[0]}</div>}
            <label htmlFor="github" className="text-gray-500">
              Github
            </label>
            <Input
              type={'text'}
              id={'github'}
              name={'github'}
              value={inputData.github}
              onChange={getInputData}
            />
            {error.github && (
              <div className="text-red-500">{error.github[0]}</div>
            )}
            <label htmlFor="description" className="text-gray-500">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={inputData.description}
              className="px-2 py-1 border-2 border-blue-400 rounded-md focus:outline-none focus:shadow-sm focus:shadow-blue-500"
              onChange={getInputData}
            ></textarea>
            {error.description && (
              <div className="text-red-500">{error.description[0]}</div>
            )}
            <label htmlFor="image" className="text-gray-500">
              <i className="text-gray-500 fa-solid fa-file"></i> Image
            </label>
            <img
              src={preview || data.image}
              alt="preview"
              width="100%"
              height={100}
              className="rounded-md"
            />
            <Input
              type={'file'}
              id={'image'}
              name={'image'}
              className="hidden"
              onChange={(e) => {
                getInputData(e);
                handlePreview(e);
              }}
            />
            {error.image && (
              <div className="text-red-500">{error.image[0]}</div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="py-1 mt-2 text-white transition duration-300 bg-blue-400 rounded-md focus:outline-none hover:bg-blue-500"
            >
              {loading ? <Spinner /> : 'Edit'}
            </button>
          </form>
        </div>
        <div className="py-8"></div>
      </div>
    </DashboardLayout>
  );
}

export default Edit;
