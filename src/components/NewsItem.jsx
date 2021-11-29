import React, { useState, useEffect } from 'react'
import { Loading } from './index'

function NewsItem() {
    const [news, setNews] = useState(null)
    const [load, setLoad] = useState(false)
    useEffect( async() => {
        const data = await fetch('http://newsapi.org/v2/top-headlines?country=us&apikey=5bc8cf8d7bd44e9b8efab6722f5a0747')
        const response = await data.json()
        setNews(response)
        setTimeout(() => {
            if(response){
                setLoad(true)
            }
        },600)
    },[])
    return (
        <div className="main-content">
            <div className="fullwidth-block">
            <div className="container">
                <div className="row">
                    <div className="content col-md-8">
                        {
                            load ?
                                news.articles.map((item, i) => {
                                    if (i < 5 && i > 1 && item.urlToImage) {
                                        return (
                                            <div className="post" key={`${item}_${i}`}>
                                                <h2 className="entry-title">{item.title}</h2>
                                                <div className="featured-image"><img src={item.urlToImage} alt="img"></img></div>
                                                <p>{item.description}</p>
                                                <a href={item.url} class="button">Read more</a>
                                            </div>
                                        )
                                    }
                                })
                            :
                            Array(3).fill(<Loading/>)
                        }
                    </div>
                    <div className="sidebar col-md-3 col-md-offset-1">
                        <div className="widget">
                            <h3 className="widget-title">Hot News</h3>
                            <ul className="arrow-list">
                                <li>Accusamus dignissimos</li>
                                <li>Ducimus praesentium</li>
                                <li>Voluptatum deleniti corrupti</li>
                                <li>Wuos dolores excepturi sint</li>
                                <li>Occaecati provident dolor</li>
                            </ul>
                        </div>

                        <div className="widget">
                            <h3 className="widget-title">Categories</h3>
                            <ul className="arrow-list">
                                <li>Nemo enim ipsam</li>
                                <li>Voluptatem voluptas</li>
                                <li>Aspernatur aut odit</li>
                                <li>Consequuntur magni</li>
                                <li>Dolores ratione</li>
                                <li>Voluptatem nesciunt</li>
                                <li>Neque porro quisquam</li>
                                <li>Dolorem ipsum quia</li>
                            </ul>
                        </div>

                        <div className="widget top-rated">
                            <h3 className="widget-title">Top rated posts</h3>
                            <ul>
                                <li><h3 className="entry-title"><div>Doloremque laudantium lorem</div></h3><div className="rating"><strong>5.5</strong> (759 rates)</div></li>
                                <li><h3 className="entry-title"><div>Doloremque laudantium lorem</div></h3><div className="rating"><strong>5.5</strong> (759 rates)</div></li>
                                <li><h3 className="entry-title"><div>Doloremque laudantium lorem</div></h3><div className="rating"><strong>5.5</strong> (759 rates)</div></li>
                                <li><h3 className="entry-title"><div>Doloremque laudantium lorem</div></h3><div className="rating"><strong>5.5</strong> (759 rates)</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default NewsItem