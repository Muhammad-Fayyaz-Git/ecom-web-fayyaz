

import React from 'react'
import Herosection from './components/Herosection'
import Hero1 from './components/Hero1'
import InstagramComp from './components/InstagramComp'
import HeroChairs from './components/HeroChairs'
import OurBlogs from './components/OurBlogs'
import TopPicks from './components/TopPicks'
import SideTable from './components/SideTable'

const HomePage = () => {
  return (
    <div>
      <Herosection/>
      <SideTable/>
    
      <TopPicks/>
      <HeroChairs/>

      <OurBlogs/>
      <InstagramComp/>

    </div>
  )
}

export default HomePage