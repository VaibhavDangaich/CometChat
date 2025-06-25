
import './App.css'
import CustomerSec from './components/CustomerSec'
import FaqSec from './components/FaqSec'
import HomePage from './components/HomePage'
import PartnerPerks from './components/PartnerPerks'
import Programs from './components/Programs'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'

function App() {
  

  return (
    <div className=' w-full'>
      <HomePage></HomePage>
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
