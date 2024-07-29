
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { UpdateFollower } from 'react-mouse-follower';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import BannerText from './components/Banner/BannerText';
import Blog from './components/Blogs/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 999,
        followSpeed: 1.5,
      }}>
      <Navbar />
      < Hero />
      </UpdateFollower>
      <UpdateFollower
      mouseOptions={{
        backgroundColor: 'black',
        zIndex: 999,
        followSpeed: 1.5,
      }}>
      <Services/>
      < Banner/>
      <BannerText/>
      <Blog />
      <Footer />
      </UpdateFollower>
    </main>
  );
}

export default App;
