import React from 'react';
import './header.styless.scss';

const Header = () => (
	<div className="t-header">
		<h1>TASK-IT</h1>
		<ul className="navigation t-header__navigation">
			<li className="navigation__item">
				<button className="navigation__button navigation__button--add-task">
					ADD TASK
				</button>
			</li>
			<li className="navigation__item">Sign In</li>
		</ul>
	</div>
);

export default Header;
