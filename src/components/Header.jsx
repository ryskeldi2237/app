import React, { useState }from 'react'
import { Link } from 'react-router-dom'

function Header({items}) {
	const [active , setActive] = useState('Home')
	const [showModal, setModal] = useState(false)
    return (
        <div>
			<div className="site-header">
				<div className="container">
					<div className="branding">
						<img src="assets/images/logo.png" alt="bg" className="logo"></img>
						<div className="logo-type">
							<h1 className="site-title">Company name</h1>
							<small className="site-description">tagline goes here</small>
						</div>
					</div>

					<div className="main-navigation">
						<button type="button" className="menu-toggle" onClick={() => setModal(!showModal)}><i className="fa fa-bars"></i></button>
						<ul className="menu">
						{
							items.map((item,i) => (
								<Link to={i !== 0 ? `/${item.toLowerCase()}` : '/'}>
									<li className={active === item ? 'active-item menu-item' : 'menu-item'} key={`${item}__${i}`} onClick={() => setActive(item)}>{item}</li>
								</Link>
							))
						}
						</ul>
					</div>

					{
						showModal &&
						<div class="mobile-navigation">
							<ul class="menu">
							{
								items.map((item,i) => (
									<Link to={i !== 0 ? `/${item.toLowerCase()}` : '/'}>
										<li className={active === item ? 'active-item menu-item' : 'menu-item'} key={`${item}_${i}`} onClick={() => {
											setActive(item)
											setModal(false)
										}}>{item}</li>
									</Link>
								))
							}
						</ul>
						</div>
					}

				</div>
			</div>
			{
				active !== 'Home' &&
					<div class="container">
						<div class="breadcrumb">
							<Link to='/'>
								<div>Home</div>
							</Link>
							<Link to='/active'>
								<span>{active}</span>
							</Link>
						</div>
					</div>
			}
		</div>

    )
}

export default Header
