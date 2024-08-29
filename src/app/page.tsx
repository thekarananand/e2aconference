import dynamic from 'next/dynamic';
import HeaderTop from '@/components/HeaderTop';
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import CallForPapers from '@/components/Tracks';
import ExpertSpeakers from '@/components/Speakers';
<<<<<<< HEAD
=======

>>>>>>> 1810909e68dc3cf470d36e116a97f2c3e9fdd56c



const Home = () => {
  return (
    <>
      <HeaderTop isHomePage={true} />
      <Navbar />
      <Hero/>
      <AboutUs/>
      <Sponsors/>
      <CallForPapers/>
      <ExpertSpeakers/>
      <Footer/>
      
      
    </>
  );
};

export default Home;
