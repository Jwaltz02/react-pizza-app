import React from 'react';
import '../styles/Home.css'
import { useState } from 'react'
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";

function Home({ slides }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const leftArrowClick = () => {
		setCurrentIndex(currentIndex !== 0 ? (currentIndex - 1) : 3)
	}

	const rightArrowClick = () => {
		setCurrentIndex(currentIndex !== 3 ? (currentIndex + 1) : 0)
	}
	return (
		<>
			<div className='home'>
				<div className='arrow-box'>
					<TfiArrowCircleLeft className='slide-arrow-left' onClick={leftArrowClick} />
					<TfiArrowCircleRight className='slide-arrow-right' onClick={rightArrowClick} />
				</div>
				<img className="slideImages" alt= "pizza slideshow" src={slides[currentIndex].image} />
			</div>
		</>
	)
}

export default Home