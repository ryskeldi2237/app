import React from 'react'

function Footer() {
    return (
        <footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<form action="#" className="subscribe-form">
								<input type="text" placeholder="Write an email so that we can contact you"></input>
								<input type="submit" value="Subscribe" onClick={(e) => e.preventDefault()}></input>
							</form>
						</div>
						<div className="col-md-3 col-md-offset-1">
							<div className="social-links">
								<i className="fa fa-facebook"></i>
								<a href="https://www.instagram.com/ryskeldi2237/">
									<i className="fa fa-instagram"></i>
								</a>
								<i className="fa fa-google-plus"></i>
								<i className="fa fa-pinterest"></i>
							</div>
						</div>
					</div>
					<p className="colophon">Copyright 2014 Vertex. Designed by Themezy. All rights reserved</p>
				</div>
			</footer>
    )
}

export default Footer
