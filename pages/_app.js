import '../styles/globals.css';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';

axios.defaults.baseURL = 'http://portfolio-backend.test';
axios.defaults.withCredentials = true;
axios.defaults.validateStatus = (status) => status < 500;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
