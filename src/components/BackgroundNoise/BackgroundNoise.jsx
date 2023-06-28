import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bgNoisePlayer } from "../../features/noisePlayer/noisePlayer";

const BackgroundNoise = () => {
	const dispatch = useDispatch();
	const { isPlayer } = useSelector((state) => state.bgNoise);

	const [hasInteracted, setHasInteracted] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const audioRef = useRef(new Audio("/assets/audio/bg-noise.mp3"));

	console.log("isPlayer:- ", isPlayer);
	console.log("is pause:- ", isPaused);

	useEffect(() => {
		const handleInteraction = () => {
			setHasInteracted(true);
			// dispatch(bgNoisePlayer(!isPlayer));
		};

		document.addEventListener("click", handleInteraction);

		return () => {
			document.removeEventListener("click", handleInteraction);
		};
	}, []);

	useEffect(() => {
		if (hasInteracted) {
			if (isPaused) {
				audioRef.current.pause();
			} else {
				audioRef.current.play().catch((error) => {
					// Handle the error here, if necessary
					console.error("Failed to play audio:", error);
				});
			}
		}
	}, [hasInteracted, isPlayer]);

	useEffect(() => {
		setIsPaused(isPlayer);
		console.log('after dis.');
	}, [dispatch]);

	return null;
};

export default BackgroundNoise;
