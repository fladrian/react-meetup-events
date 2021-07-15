import { Link } from "react-router-dom";
import Styles from './MainNavigation.module.css';

import { useContext } from 'react';
import FavoriteContext from '../../store/favorite-context';

const NavBar = () => {

	const favoritesContext = useContext(FavoriteContext)

	return (
		<header className={Styles.header}>
			<div className={Styles.logo}>
				MeetUps React
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/">AllMeetups</Link>
					</li>
					<li>
						<Link to="/add-meetup">Add meetup</Link>
					</li>
					<li>
						<Link to="/favorites">Favorites <span className={Styles.badge}>{favoritesContext.totalFavorites}</span></Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default NavBar
