import Style from './NewMeetupForm.module.css';

import Card from '../ui/Card';
import { useState, useRef } from 'react';

const NewMeetupForm = ({ setMeetup }) => {

	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	const [form, setForm] = useState({})
	const [isDisabled, setIsDisabled] = useState(true)

	const handleSubmit = (e) => {
		e.preventDefault();
		setMeetup(form)
	}

	const handleInput = () => {
		const title = titleInputRef.current.value.trim()
		const image = imageInputRef.current.value.trim()
		const address = addressInputRef.current.value.trim()
		const description = descriptionInputRef.current.value.trim()

		if (!title || !image || !address || !description) {
			console.info("Can't send it, some inputs are empty");
			setIsDisabled(true)
		} else {
			setIsDisabled(false)
			setForm({
				title,
				image,
				address,
				description
			})
		}
	}

	return (
		<Card>
			<form className={Style.form} onSubmit={handleSubmit}>
				<div className={Style.control}>
					<label htmlFor="title">Meetup Title</label>
					<input type="text" required onChange={handleInput} ref={titleInputRef} id="title" />
				</div>
				<div className={Style.control}>
					<label htmlFor="image">Meetup Image</label>
					<input type="url" required onChange={handleInput} ref={imageInputRef} id="image" />
				</div>
				<div className={Style.control}>
					<label htmlFor="address">Meetup Address</label>
					<input type="text" required onChange={handleInput} ref={addressInputRef} id="address" />
				</div>
				<div className={Style.control}>
					<label htmlFor="description">Meetup Description</label>
					<textarea ref={descriptionInputRef} id="description" required onChange={handleInput} cols="30" rows="10"></textarea>
				</div>
				<div className={Style.actions}>
					<button disabled={isDisabled}>Add Meetup</button>
				</div>
			</form>

		</Card>
	)
}

export default NewMeetupForm
