
import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Routes, Route} from 'react-router-dom'

import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WomanPage from './stores/pages/WomanPage'
import WatchesPage from './stores/pages/WatchesPage'
import MenPage from './stores/pages/MenPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import FridgePage from './stores/pages/FridgePage'
import SpeakerPage from './stores/pages/SpeakerPage'
import TvPage from './stores/pages/TvPage'
import MobileSingle from './singles/MobileSingle'
import UseCart from './stores/UseCart'
import ComputerSingle from './singles/ComputerSingle'
import WatchesSingle from './singles/WatchesSingle'
import MenSingle from './singles/MenSingle'
import WomanSingle from './singles/WomanSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import AcSingle from './singles/AcSingle'
import KitchenSingle from './singles/KitchenSingle'
import FridgeSingle from './singles/FridgeSingle'
import SpeakerSingle from './singles/SpeakerSingle'



const App = () => {
  return (
    <div>
      {/* <LandingPage/> */}
      <Routes>
        
        <Route path = '/' element = {<LandingPage/>}/>
        
        <Route path = '/mobile' element = {<MobilePage/>}/>
        <Route path = '/computer' element= {<ComputerPage/>}/>
        <Route path = '/woman' element= {<WomanPage/>}/>
        <Route path = '/watch' element= {<WatchesPage/>}/>
        <Route path = '/men' element= {<MenPage/>}/>
        <Route path = '/furniture' element= {<FurniturePage/>}/>
        <Route path = '/ac' element= {<AcPage/>}/>
        <Route path = '/kitchen' element= {<KitchenPage/>}/>
        <Route path = '/fridge' element= {<FridgePage/>}/>
        <Route path = '/speaker' element = {<SpeakerPage/>}/>
        <Route path = '/tv' element = {<TvPage/>}/>
        
        <Route path = '/cart' element = {<UseCart/>}/>
        <Route path = '/mobile/:id' element = {<MobileSingle/>}/>
        <Route path = '/computer/:id'element= {<ComputerSingle/>}/>
        <Route path = '/watch/:id' element= {<WatchesSingle/>}/>
        <Route path = '/men/:id' element= {<MenSingle/>}/>
        <Route path = '/woman/:id' element={<WomanSingle/>}/>
        <Route path = '/furniture/:id'element= {<FurnitureSingle/>}/>
        <Route path = '/ac/:id'element={<AcSingle/>}/>
        <Route path = '/kitchen/:id'element={<KitchenSingle/>}/>
        <Route path = '/fridge/:id' element={<FridgeSingle/>}/>
        <Route path = '/mobile/:id' element={<SpeakerSingle/>}/>

      </Routes>
    </div>
  )
}

export default App;



