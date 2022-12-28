import {useState} from "react";

const DevOverlay = () => {
	if (process.env.NODE_ENV === 'production') {
		return null;
	}

	const [isOpen,setIsOpen] = useState(false);

	if ( !isOpen ) return <button style={{position: 'absolute',}} onClick={() => setIsOpen(true)}>Open Dev Overlay</button>;
	return (
		<div id='dev-overlay-container' style={{position:'absolute', zIndex: '999999', backgroundColor: 'black', width: '100vw', height: '100vh'}}>
			<ul>
				<h1>todo</h1>
				<li>swipe controls. get rid of prev / next buttons / yesterday today tomorrow</li>
			</ul>			
			<button style={{position: 'absolute', top: '0', right: '0',}} onClick={() => setIsOpen(false)}>Close Dev Overlay</button>
		</div>
	);
};

export default DevOverlay;
