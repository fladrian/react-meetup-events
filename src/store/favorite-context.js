import { createContext, useState } from 'react';

const FavoriteContext = createContext({
	favorites: [],
	totalFavorites: 0,
	addFavorites: (favoriteMeetup) => { },
	removeFavorites: (meetupId) => { },
	itemsIsFavorite: (meetupId) => { }
});

export const FavoritesContextProvider = ({ children }) => {
	const [userFavorites, setUserFavorites] = useState([])

	const addFavorites = (favoriteMeetup) => {
		setUserFavorites(prevUserFavorites => prevUserFavorites.concat(favoriteMeetup))
		// setMeetup(favoriteMeetup)
	}

	const removeFavorites = (meetupId) => {
		setUserFavorites(prevUserFavorites => prevUserFavorites.filter(meetup => meetup.id !== meetupId))
		// const getKey = userFavorites.find(meet => meet.id === meetupId)
		// console.info(getKey.fav_id);
		// deleteMeetup(getKey.fav_id)
	}

	const itemsIsFavorite = (meetupId) => (
		userFavorites.some(meetup => meetup.id === meetupId)
	)


	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,

		addFavorites,
		removeFavorites,
		itemsIsFavorite
	}

	return <FavoriteContext.Provider value={context}>
		{children}
	</FavoriteContext.Provider>
}

export default FavoriteContext;