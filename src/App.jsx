
import './App.css'
import FaqSec from './components/FaqSec'
import HomePage from './components/HomePage'
import PartnerPerks from './components/PartnerPerks'
import Programs from './components/Programs'

function App() {
  

  return (
    <div className='w-full'>
      <HomePage></HomePage>
      <PartnerPerks></PartnerPerks>
      <Programs></Programs>
      <FaqSec></FaqSec>
      
   </div>
  )
}

export default App
