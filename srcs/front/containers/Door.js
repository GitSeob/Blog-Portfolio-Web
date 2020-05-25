import React, {useRef, useEffect} from 'react';
import {DoorContainer, InnerContent, Filter, DoorH1, DoorH2} from '../css/styledCss';

export const CarrotSvg = ({styles, classname, iconWidth="300pt", iconHeight="300pt"}) => {
	return (
		<svg
			className={classname}
			style={styles}
			width={iconWidth}
			height={iconHeight}
			viewBox="-82 0 511 512" xmlns="http://www.w3.org/2000/svg"><path d="m160.507812 67.25-44.605468 34.367188h-32.507813l-44.628906-34.367188c-7.078125-5.460938-8.398437-15.625-2.941406-22.714844 5.457031-7.082031 15.632812-8.410156 22.714843-2.953125l24.90625 19.179688v-44.566407c0-8.9375 7.246094-16.195312 16.195313-16.195312 8.941406 0 16.199219 7.253906 16.199219 16.195312v44.566407l24.894531-19.179688c7.082031-5.457031 17.257813-4.128906 22.726563 2.953125 5.445312 7.089844 4.125 17.253906-2.953126 22.714844zm0 0" fill="#5dc75d"/><path d="m160.507812 67.25-44.605468 34.367188h-16.261719v-101.617188c8.941406 0 16.199219 7.253906 16.199219 16.195312v44.566407l24.894531-19.179688c7.082031-5.457031 17.257813-4.128906 22.726563 2.953125 5.445312 7.089844 4.125 17.253906-2.953126 22.714844zm0 0" fill="#0cbf4e"/><path d="m198.789062 231.789062c0 17.675782-1.046874 36.511719-3.03125 55.722657-1.105468 10.722656-2.496093 21.566406-4.171874 32.398437-14.683594 95.773438-50.324219 190.242188-91.941407 190.242188-23.875 0-45.777343-31.078125-62.882812-75.644532-3.90625-10.175781-7.558594-21.039062-10.929688-32.398437-12.4375-41.886719-21.011719-90.484375-24.078125-135.34375-.769531-11.078125-1.191406-21.929687-1.242187-32.394531-.011719-.863282-.011719-1.730469-.011719-2.582032 0-114.878906 44.382812-137.652343 99.144531-137.652343 54.75-.003907 99.144531 22.773437 99.144531 137.652343zm0 0" fill="#ffa433"/><path d="m198.789062 231.789062c0 17.675782-1.046874 36.511719-3.03125 55.722657-1.105468 10.722656-2.496093 21.566406-4.171874 32.398437-14.683594 95.773438-50.324219 190.242188-91.941407 190.242188v-416.019532c54.75 0 99.144531 22.777344 99.144531 137.65625zm0 0" fill="#ff852b"/><path d="m195.757812 287.511719c-1.105468 10.722656-2.496093 21.566406-4.171874 32.394531h-54.535157c-8.949219 0-16.195312-7.257812-16.195312-16.195312 0-8.953126 7.246093-16.199219 16.195312-16.199219zm0 0" fill="#ffa433"/><path d="m46.957031 250.566406c0 8.941406-7.246093 16.199219-16.199219 16.199219h-29.007812c-.765625-11.078125-1.1875-21.933594-1.242188-32.398437h30.25c8.953126 0 16.199219 7.25 16.199219 16.199218zm0 0" fill="#ff852b"/><path d="m82.214844 418.308594c0 8.953125-7.257813 16.199218-16.199219 16.199218h-29.253906c-3.90625-10.175781-7.558594-21.039062-10.929688-32.398437h40.183594c8.941406 0 16.199219 7.257813 16.199219 16.199219zm0 0" fill="#ff852b"/><path d="m318.71875 67.25-44.609375 34.367188h-32.507813l-44.617187-34.367188c-7.089844-5.460938-8.410156-15.625-2.949219-22.714844 5.464844-7.082031 15.632813-8.410156 22.722656-2.953125l24.898438 19.179688v-44.566407c0-8.9375 7.246094-16.195312 16.195312-16.195312 8.941407 0 16.207032 7.253906 16.207032 16.195312v44.566407l24.886718-19.179688c7.078126-5.457031 17.257813-4.128906 22.722657 2.953125 5.449219 7.089844 4.128906 17.253906-2.949219 22.714844zm0 0" fill="#aed06d"/><path d="m318.71875 67.25-44.609375 34.367188h-16.257813v-101.617188c8.941407 0 16.207032 7.253906 16.207032 16.195312v44.566407l24.886718-19.179688c7.078126-5.457031 17.257813-4.128906 22.722657 2.953125 5.449219 7.089844 4.128906 17.253906-2.949219 22.714844zm0 0" fill="#5dc75d"/><path d="m346.921875 336.886719c-.800781 4.554687-1.644531 9.085937-2.527344 13.609375-2.164062 10.988281-4.585937 21.828125-7.246093 32.390625-17.941407 71.074219-46.78125 129.113281-79.296876 129.113281-23.503906 0-45.085937-30.324219-62.019531-73.984375-3.941406-10.148437-7.628906-21.011719-11.019531-32.394531-17.152344-57.339844-26.113281-124.320313-25.425781-174.996094.125-11.789062.746093-22.558594 1.808593-32.402344 8.875-82.011718 48.785157-99.539062 96.65625-99.539062 27.496094 0 52.351563 5.78125 70.222657 26.230468 5.082031 5.820313 2.140625 14.925782-5.363281 16.734376-23.121094 5.582031-40.292969 26.414062-40.292969 51.25 0 22.363281 13.917969 41.46875 33.566406 49.140624 6.058594 2.359376 8.554687 9.75 5.09375 15.25-4.078125 6.433594-6.425781 14.066407-6.425781 22.246094 0 16.070313 9.097656 30.03125 22.414062 36.996094 7.371094 3.847656 11.289063 12.164062 9.855469 20.355469zm0 0" fill="#ffc43b"/><path d="m346.921875 336.886719c-.800781 4.554687-1.644531 9.085937-2.527344 13.609375-2.164062 10.988281-4.585937 21.828125-7.246093 32.390625-17.941407 71.074219-46.78125 129.113281-79.296876 129.113281v-413.316406c27.496094 0 52.351563 5.78125 70.222657 26.230468 5.082031 5.820313 2.140625 14.925782-5.363281 16.734376-23.121094 5.582031-40.292969 26.414062-40.292969 51.25 0 22.363281 13.917969 41.46875 33.566406 49.140624 6.058594 2.359376 8.554687 9.75 5.09375 15.25-4.078125 6.433594-6.425781 14.066407-6.425781 22.246094 0 16.070313 9.097656 30.03125 22.414062 36.996094 7.371094 3.847656 11.289063 12.164062 9.855469 20.355469zm0 0" fill="#ffa433"/><path d="m201.867188 214.425781c0 8.941407-7.246094 16.195313-16.199219 16.195313h-26.285157c.132813-11.78125.746094-22.558594 1.816407-32.394532h24.46875c8.953125 0 16.199219 7.253907 16.199219 16.199219zm0 0" fill="#ffa433"/><path d="m344.394531 350.496094c-2.164062 10.988281-4.585937 21.828125-7.246093 32.390625h-27.265626c-8.941406 0-16.199218-7.253907-16.199218-16.195313s7.257812-16.195312 16.199218-16.195312zm0 0" fill="#ffc43b"/><path d="m224.652344 421.816406c0 8.953125-7.246094 16.199219-16.199219 16.199219h-12.621094c-3.941406-10.152344-7.625-21.015625-11.015625-32.394531h23.636719c8.953125 0 16.199219 7.253906 16.199219 16.195312zm0 0"
			fill="#ffa433"/>
		</svg>
	);
}

const Door = () => {
	return (
		<DoorContainer>
			<InnerContent>
				<Filter >
					{/* <svg style={{position: 'absolute', paddingBottom: '100px'}} height="300pt" viewBox="-82 0 511 512" width="300pt" xmlns="http://www.w3.org/2000/svg"><path d="m160.507812 67.25-44.605468 34.367188h-32.507813l-44.628906-34.367188c-7.078125-5.460938-8.398437-15.625-2.941406-22.714844 5.457031-7.082031 15.632812-8.410156 22.714843-2.953125l24.90625 19.179688v-44.566407c0-8.9375 7.246094-16.195312 16.195313-16.195312 8.941406 0 16.199219 7.253906 16.199219 16.195312v44.566407l24.894531-19.179688c7.082031-5.457031 17.257813-4.128906 22.726563 2.953125 5.445312 7.089844 4.125 17.253906-2.953126 22.714844zm0 0" fill="#5dc75d"/><path d="m160.507812 67.25-44.605468 34.367188h-16.261719v-101.617188c8.941406 0 16.199219 7.253906 16.199219 16.195312v44.566407l24.894531-19.179688c7.082031-5.457031 17.257813-4.128906 22.726563 2.953125 5.445312 7.089844 4.125 17.253906-2.953126 22.714844zm0 0" fill="#0cbf4e"/><path d="m198.789062 231.789062c0 17.675782-1.046874 36.511719-3.03125 55.722657-1.105468 10.722656-2.496093 21.566406-4.171874 32.398437-14.683594 95.773438-50.324219 190.242188-91.941407 190.242188-23.875 0-45.777343-31.078125-62.882812-75.644532-3.90625-10.175781-7.558594-21.039062-10.929688-32.398437-12.4375-41.886719-21.011719-90.484375-24.078125-135.34375-.769531-11.078125-1.191406-21.929687-1.242187-32.394531-.011719-.863282-.011719-1.730469-.011719-2.582032 0-114.878906 44.382812-137.652343 99.144531-137.652343 54.75-.003907 99.144531 22.773437 99.144531 137.652343zm0 0" fill="#ffa433"/><path d="m198.789062 231.789062c0 17.675782-1.046874 36.511719-3.03125 55.722657-1.105468 10.722656-2.496093 21.566406-4.171874 32.398437-14.683594 95.773438-50.324219 190.242188-91.941407 190.242188v-416.019532c54.75 0 99.144531 22.777344 99.144531 137.65625zm0 0" fill="#ff852b"/><path d="m195.757812 287.511719c-1.105468 10.722656-2.496093 21.566406-4.171874 32.394531h-54.535157c-8.949219 0-16.195312-7.257812-16.195312-16.195312 0-8.953126 7.246093-16.199219 16.195312-16.199219zm0 0" fill="#ffa433"/><path d="m46.957031 250.566406c0 8.941406-7.246093 16.199219-16.199219 16.199219h-29.007812c-.765625-11.078125-1.1875-21.933594-1.242188-32.398437h30.25c8.953126 0 16.199219 7.25 16.199219 16.199218zm0 0" fill="#ff852b"/><path d="m82.214844 418.308594c0 8.953125-7.257813 16.199218-16.199219 16.199218h-29.253906c-3.90625-10.175781-7.558594-21.039062-10.929688-32.398437h40.183594c8.941406 0 16.199219 7.257813 16.199219 16.199219zm0 0" fill="#ff852b"/><path d="m318.71875 67.25-44.609375 34.367188h-32.507813l-44.617187-34.367188c-7.089844-5.460938-8.410156-15.625-2.949219-22.714844 5.464844-7.082031 15.632813-8.410156 22.722656-2.953125l24.898438 19.179688v-44.566407c0-8.9375 7.246094-16.195312 16.195312-16.195312 8.941407 0 16.207032 7.253906 16.207032 16.195312v44.566407l24.886718-19.179688c7.078126-5.457031 17.257813-4.128906 22.722657 2.953125 5.449219 7.089844 4.128906 17.253906-2.949219 22.714844zm0 0" fill="#aed06d"/><path d="m318.71875 67.25-44.609375 34.367188h-16.257813v-101.617188c8.941407 0 16.207032 7.253906 16.207032 16.195312v44.566407l24.886718-19.179688c7.078126-5.457031 17.257813-4.128906 22.722657 2.953125 5.449219 7.089844 4.128906 17.253906-2.949219 22.714844zm0 0" fill="#5dc75d"/><path d="m346.921875 336.886719c-.800781 4.554687-1.644531 9.085937-2.527344 13.609375-2.164062 10.988281-4.585937 21.828125-7.246093 32.390625-17.941407 71.074219-46.78125 129.113281-79.296876 129.113281-23.503906 0-45.085937-30.324219-62.019531-73.984375-3.941406-10.148437-7.628906-21.011719-11.019531-32.394531-17.152344-57.339844-26.113281-124.320313-25.425781-174.996094.125-11.789062.746093-22.558594 1.808593-32.402344 8.875-82.011718 48.785157-99.539062 96.65625-99.539062 27.496094 0 52.351563 5.78125 70.222657 26.230468 5.082031 5.820313 2.140625 14.925782-5.363281 16.734376-23.121094 5.582031-40.292969 26.414062-40.292969 51.25 0 22.363281 13.917969 41.46875 33.566406 49.140624 6.058594 2.359376 8.554687 9.75 5.09375 15.25-4.078125 6.433594-6.425781 14.066407-6.425781 22.246094 0 16.070313 9.097656 30.03125 22.414062 36.996094 7.371094 3.847656 11.289063 12.164062 9.855469 20.355469zm0 0" fill="#ffc43b"/><path d="m346.921875 336.886719c-.800781 4.554687-1.644531 9.085937-2.527344 13.609375-2.164062 10.988281-4.585937 21.828125-7.246093 32.390625-17.941407 71.074219-46.78125 129.113281-79.296876 129.113281v-413.316406c27.496094 0 52.351563 5.78125 70.222657 26.230468 5.082031 5.820313 2.140625 14.925782-5.363281 16.734376-23.121094 5.582031-40.292969 26.414062-40.292969 51.25 0 22.363281 13.917969 41.46875 33.566406 49.140624 6.058594 2.359376 8.554687 9.75 5.09375 15.25-4.078125 6.433594-6.425781 14.066407-6.425781 22.246094 0 16.070313 9.097656 30.03125 22.414062 36.996094 7.371094 3.847656 11.289063 12.164062 9.855469 20.355469zm0 0" fill="#ffa433"/><path d="m201.867188 214.425781c0 8.941407-7.246094 16.195313-16.199219 16.195313h-26.285157c.132813-11.78125.746094-22.558594 1.816407-32.394532h24.46875c8.953125 0 16.199219 7.253907 16.199219 16.199219zm0 0" fill="#ffa433"/><path d="m344.394531 350.496094c-2.164062 10.988281-4.585937 21.828125-7.246093 32.390625h-27.265626c-8.941406 0-16.199218-7.253907-16.199218-16.195313s7.257812-16.195312 16.199218-16.195312zm0 0" fill="#ffc43b"/><path d="m224.652344 421.816406c0 8.953125-7.246094 16.199219-16.199219 16.199219h-12.621094c-3.941406-10.152344-7.625-21.015625-11.015625-32.394531h23.636719c8.953125 0 16.199219 7.253906 16.199219 16.195312zm0 0" fill="#ffa433"/></svg> */}
					<CarrotSvg styles={{position: 'absolute', paddingBottom: '100px'}} />
					<div style={{backgroundColor: '', textAlign: 'right', position: 'absolute'}}>
						<DoorH1 style={{color:'white', fontSize: '100px'}}>ANJOY</DoorH1>
						<DoorH2>EVERYTHING</DoorH2>
					</div>
				</Filter>
			</InnerContent>
		</DoorContainer>
	);
};

Door.propTypes = {

};

export default Door;
