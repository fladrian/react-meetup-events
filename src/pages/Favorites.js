import MeetupList from '../components/meetups/MeetupList';

import { useContext } from 'react';
import FavoriteContext from '../store/favorite-context';

const FavoritesPage = () => {
	const favoritesContext = useContext(FavoriteContext)

	return (
		<div>
			<h1>FavoritesPage</h1>
			<MeetupList meetups={favoritesContext.favorites} />
		</div>
	)
}

export default FavoritesPage
