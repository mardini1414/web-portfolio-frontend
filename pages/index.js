import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import axios from 'axios';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default index;
