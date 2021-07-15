import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';
const NewMeetupsPage = () => {
	// const [meetup, setMeetup] = useState({})
	const history = useHistory()

	const setMeetup = async (meetup) => {
		console.info(meetup, "from parent");
		try {
			const data = await fetch("https://react-academind-fdec3-default-rtdb.firebaseio.com/new-meetup.json", {
				method: "POST",
				body: JSON.stringify(meetup),
				headers: {
					"Content-Type": "application/json"
				}
			})
			console.info(data);
			history.replace("/")
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<>
			<h1>Add new meetup</h1>
			<NewMeetupForm setMeetup={setMeetup} />
		</>
	)
}

export default NewMeetupsPage
