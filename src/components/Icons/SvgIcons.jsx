export const AudioIcon = ({ className, ...rests }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={19}
		height={14}
		fill="none"
		className={`audio-svg ${className}`}
		{...rests}
	>
		<path
			d="M1 8.80355V5.51784C1 5.06418 1.36777 4.69641 1.82143 4.69641H4.037C4.19918 4.69641 4.35772 4.64841 4.49265 4.55845L7.93721 2.26208C8.48313 1.89816 9.21429 2.28948 9.21429 2.94555V11.3759C9.21429 12.0319 8.48313 12.4233 7.93721 12.0593L4.49265 9.7629C4.35772 9.67295 4.19918 9.62498 4.037 9.62498H1.82143C1.36777 9.62498 1 9.25723 1 8.80355Z"
			stroke="white"
			strokeWidth="1.5"
		></path>
		<g className="on">
			<path
				d="M12.9102 3.46429C12.9102 3.46429 14.1423 4.69644 14.1423 6.75001C14.1423 8.80358 12.9102 10.0357 12.9102 10.0357"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
			<path
				d="M15.375 1C15.375 1 17.4286 3.05357 17.4286 6.75C17.4286 10.4464 15.375 12.5 15.375 12.5"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</g>
		<g className="off">
			<path
				d="M14.1433 6.16071L15.7857 7.80357M12.5 7.80357L14.1433 6.16071L12.5 7.80357ZM15.7857 4.51785L14.1433 6.16071L15.7857 4.51785ZM14.1433 6.16071L12.5 4.51785L14.1433 6.16071Z"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</g>
	</svg>
);

