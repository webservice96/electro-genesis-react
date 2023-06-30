import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bgNoisePlayer } from "../../features/noisePlayer/noisePlayer";

const BackgroundNoise = () => {
	const dispatch = useDispatch();
	const { isPlayer } = useSelector((state) => state.bgNoise);

	const [hasInteracted, setHasInteracted] = useState(false);
	const [isPaused, setIsPaused] = useState(isPlayer);
	const audioRef = useRef(new Audio("/assets/audio/bg-noise-2.mpeg"));

	useEffect(() => {
		const handleInteraction = () => {
			setHasInteracted(true);
		};

		document.addEventListener("click", handleInteraction);

		return () => {
			document.removeEventListener("click", handleInteraction);
		};
	}, []);

	useEffect(() => {
		dispatch(bgNoisePlayer(hasInteracted));
	}, [hasInteracted]);

	useEffect(() => {
		if (hasInteracted) {
			if (isPaused) {
				audioRef.current.pause();
			} else {
				audioRef.current.play().catch((error) => {
					console.error("Failed to play audio:", error);
				});
			}
		}
	}, [hasInteracted, isPlayer]);

	useEffect(() => {
		setIsPaused(isPlayer);
	}, [isPlayer]);

	return null;
};

export default BackgroundNoise;
