import React, { useState, useEffect } from "react";
import { PhotoItem } from "../components";

function Photos() {
  const [images, setImages] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos/?query=buildings&per_page=12&client_id=NcriBC7gkTiAd9-qzRQ1Sdm9G4ZoEzfTL6a26pkGZEE"
    )
      .then((data) => data.json())
      .then((res) => setImages(res.results));
  }, []);
  return <PhotoItem items={images} />;
}

export default Photos;
