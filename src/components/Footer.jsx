import React from 'react'

function Footer() {
    return (
        <footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<form action="#" className="subscribe-form">
								<input type="text" placeholder="Enter your email to subscribe..."></input>
								<input type="submit" value="Subscribe" onClick={(e) => e.preventDefault()}></input>
							</form>
						</div>
						<div className="col-md-3 col-md-offset-1">
							<div className="social-links">
								<i className="fa fa-facebook"></i>
								<i className="fa fa-twitter"></i>
								<i className="fa fa-google-plus"></i>
								<i className="fa fa-pinterest"></i>
							</div>
						</div>
					</div>
					<p className="colophon">Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
				</div>
			</footer>
    )
}

export default Footer
