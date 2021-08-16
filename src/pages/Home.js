import React, { useState, useEffect} from 'react'
import { Weather, Main } from '../components'

function Home() {
  const [images, setImages] = useState(null)
  useEffect(()=> {  
    fetch('https://api.unsplash.com/search/photos/?query=images&per_page=9&client_id=NcriBC7gkTiAd9-qzRQ1Sdm9G4ZoEzfTL6a26pkGZEE')
      .then(data => data.json())
      .then(res => setImages(res.results))
  },[])
  return (
    <div>
      <Weather />		
      <Main items={images}/>
    </div>
  )
}

export default Home