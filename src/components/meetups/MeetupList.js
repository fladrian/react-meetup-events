import Style from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

const MeetupList = ({ meetups }) =>
(
	<ul className={Style.list}>
		{meetups.map(meetup => (<MeetupItem key={meetup.id} data={meetup} />))}
	</ul>
)


export default MeetupList
