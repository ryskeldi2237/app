import React, { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos/?query=images&per_page=9&client_id=NcriBC7gkTiAd9-qzRQ1Sdm9G4ZoEzfTL6a26pkGZEE"
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);
  return (
    <main className="main-content">
      <div className="fullwidth-block" data-bg-color="#262936">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="news">
                <div className="date">06.10</div>
                <h3>
                  <div>Doloremque laudantium totam sequi </div>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                  saepe assumenda dolorem modi, expedita voluptatum ducimus
                  necessitatibus. Asperiores quod reprehenderit necessitatibus
                  harum, mollitia, odit et consequatur maxime nisi amet
                  doloremque.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news">
                <div className="date">06.10</div>
                <h3>
                  <div>Doloremque laudantium totam sequi </div>
                </h3>
                <p>
                  Nobis architecto consequatur ab, ea, eum autem aperiam
                  accusantium placeat vitae facere explicabo temporibus minus
                  distinctio cum optio quis, dignissimos eius aspernatur fuga.
                  Praesentium totam, corrupti beatae amet expedita veritatis.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news">
                <div className="date">06.10</div>
                <h3>
                  <div>Doloremque laudantium totam sequi </div>
                </h3>
                <p>
                  Enim impedit officiis placeat qui recusandae doloremque
                  possimus, iusto blanditiis, quam optio delectus maiores.
                  Possimus rerum, velit cum natus eos. Cumque pariatur beatae
                  asperiores, esse libero quas ad dolorem. Voluptates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fullwidth-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="section-title">Application features</h2>
              <ul className="arrow-feature">
                <li>
                  <h3>Natus error sit voluptatem accusantium</h3>
                  <p>
                    Doloremque laudantium totam rem aperiam Inventore veritatis
                    et quasi architecto beatae vitae.
                  </p>
                </li>
                <li>
                  <h3>Natus error sit voluptatem accusantium</h3>
                  <p>
                    Doloremque laudantium totam rem aperiam Inventore veritatis
                    et quasi architecto beatae vitae.
                  </p>
                </li>
                <li>
                  <h3>Natus error sit voluptatem accusantium</h3>
                  <p>
                    Doloremque laudantium totam rem aperiam Inventore veritatis
                    et quasi architecto beatae vitae.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2 className="section-title">Weather analyssis</h2>
              <ul className="arrow-list">
                <li>Accusantium doloremque laudantium rem aperiam</li>
                <li>Eaque ipsa quae ab illo inventore veritatis quasi</li>
                <li>Architecto beatae vitae dicta sunt explicabo</li>
                <li>Nemo enim ipsam voluptatem quia voluptas</li>
                <li>Aspernatur aut odit aut fugit, sed quia consequuntur</li>
                <li>Magni dolores eos qui ratione voluptatem sequi</li>
                <li>Neque porro quisquam est qui dolorem ipsum quia</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2 className="section-title">Awesome Photos</h2>
              <div className="photo-grid">
                {images &&
                  images.map((item, i) => (
                    <a
                      href={item.links.download}
                      className="main-images"
                      key={item + "_" + i}
                    >
                      <img src={item.urls.regular} alt="#"></img>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
