
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { UpdateFollower } from 'react-mouse-follower';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';

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
      </UpdateFollower>
    </main>
  );
}

export default App;
