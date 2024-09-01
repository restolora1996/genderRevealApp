'use client';

import React, { useState } from 'react'; // eslint-disable-line

import styles from './page.module.css';
import Video from '../components/video';
import Reveal from '../components/reveal';
import GenderForm from '../components/genderForm';

export default function Home() {
	const [gender, setGender] = useState(null);
	const [showGender, setShowGender] = useState(false);

	const handleSubmit = value => {
		if (value) {
			setGender(value);
		}
	};

	const onReveal = e => {
		setShowGender(e);
	};

	return (
		<>
			<div className={styles.contentCenter}>
				{showGender ? (
					gender === 'Male' ? (
						<>
							<Video src="/boy.mp4" autoPlay={true} muted={false} loop={false} />
						</>
					) : (
						<>
							<Video src="/girl.mp4" autoPlay={true} muted={false} loop={false} />
						</>
					)
				) : (
					<Video src="/bgloop.mp4" autoPlay={true} muted={true} loop={true} />
				)}

				{!gender ? <GenderForm handleSubmit={handleSubmit} /> : <Reveal gender={gender} onReveal={onReveal} />}
			</div>
		</>
	);
}
