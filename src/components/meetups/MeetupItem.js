import Styles from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoriteContext from '../../store/favorite-context';

const MeetupItem = ({ data }) => {
	const { id, title, image, address, description } = data;
	const favoritesContext = useContext(FavoriteContext)

	const isFavorite = favoritesContext.itemsIsFavorite(id)

	const toogleFavoritesStatusHandler = () => {
		if (isFavorite) {
			favoritesContext.removeFavorites(id)
		}
		else {
			favoritesContext.addFavorites({ ...data })
		}
	}


	return (
		<Card>
			<li className={Styles.item}>
				<div className={Styles.image}>
					<img src={image} alt={title} />
				</div>
				<div className={Styles.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<div className={Styles.actions}>
					<button onClick={toogleFavoritesStatusHandler}>
						{isFavorite ? 'Remove from fav' : 'To Favorites'}
					</button>
				</div>
			</li>
		</Card>
	)
}

export default MeetupItem
