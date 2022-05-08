import '../styles/globals.css';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import NextNProgress from 'nextjs-progressbar';
import nprogress from 'nprogress';
import 'animate.css';

nprogress.configure({ showSpinner: false });

axios.defaults.baseURL = 'https://portfolioweb-backend.000webhostapp.com/';
axios.defaults.withCredentials = false;
axios.defaults.validateStatus = (status) => true;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="rgb(59 130 246)" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
