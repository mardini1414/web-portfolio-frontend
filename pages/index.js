import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get('api/portfolio');

  return {
    props: {
      data: res.data.data.reverse(),
    },
  };
}

function index({ data }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Portfolio data={data} />
      </main>
    </>
  );
}

export default index;
