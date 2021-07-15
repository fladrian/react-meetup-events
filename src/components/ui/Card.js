import Style from './Card.module.css';

const Card = ({ children }) => (
	<article className={Style.card}>
		{children}
	</article>
)

export default Card
