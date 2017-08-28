import {Wheel, WheelManager, Engine} from './vehicle-parts.js';

export const Car = () => {
	let state = {
		wheels: [
			{...Wheel({tirePressure: 36})},
			{...Wheel({tirePressure: 36})},
			{...Wheel({tirePressure: 36})},
			{...Wheel({tirePressure: 36})}
		],
		oilLevel: 1			// 0-9
	};

	return {
		...state,
		...WheelManager(state),
		...Engine(state)
	};
};

export const Unicycle = () => {
	return {...Wheel({tirePressure: 36})};
};