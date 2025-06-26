
import './App.css'
import CustomerSec from './components/CustomerSec'
import FaqSec from './components/FaqSec'
import HomePage from './components/HomePage'
import PartnerPerks from './components/PartnerPerks'
import Programs from './components/Programs'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false
    });
  }, []);

  

  return (
    <div className=' w-full'>
      <HomePage ></HomePage>
      <CustomerSec></CustomerSec>
      <PartnerPerks></PartnerPerks>
      <Programs></Programs>
     
      <FaqSec></FaqSec>
      <GetStarted></GetStarted>
      <Footer></Footer>
     
     
      
   </div>
  )
}

export default App
