import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import axios from 'axios';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Head from 'next/head';

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
      <Head>
        <title>Hi I&apos;m Mardini</title>
        <meta
          name="description"
          content="I'm Mardini born in Pandeglang Banten on June 6, 1997, have
honest personality, easy to adapt and happy to learn new things and can
team work. Love things about programming and everyday life
I am learning to make a website."
        />
      </Head>
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
