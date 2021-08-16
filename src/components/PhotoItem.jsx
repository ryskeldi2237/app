import React from 'react'

function PhotoItem({items}) {
    return (
        <div className="main-content">
            <div className="fullwidth-block">
                <div className="container">
                    <div className="row">
                        {
                            items &&
                            items.map((item, i) => (
                                <div className="photo-preview photo-detail" key={item+'_'+i}><img src={item.urls.regular} alt="$"></img></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoItem
