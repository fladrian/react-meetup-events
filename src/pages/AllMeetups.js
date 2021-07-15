import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';


const AllMeetupsPage = () => {


	const [meetups, setMeetups] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getMeetups()
	}, [])

	const getMeetups = async () => {
		try {
			const data = await (await fetch("https://react-academind-fdec3-default-rtdb.firebaseio.com/new-meetup.json")).json()
			const meetups = []
			for (const key in data) {
				const obj = {
					id: key,
					...data[key]
				}
				meetups.push(obj)
			}
			setMeetups(meetups)
			setIsLoading(false)
		} catch (error) {
			console.error(error)
		}
	}

	if (isLoading) return <section><p>Loading...</p></section>

	return (
		<section>
			<h1>All meet ups!</h1>
			<MeetupList meetups={meetups} />
		</section>
	)
}

export default AllMeetupsPage
