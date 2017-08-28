export const WheelManager = (state) => ({
	printTires: () => {
		state.wheels.forEach((wheel, i) => {
			console.log(`Wheel ${i}: ${wheel.checkTirePressure()} psi`);
		});
	}
});

export const Wheel = (state) => ({
	checkTirePressure: () => {
		return state.tirePressure;
	},

	inflate: () => {
		++state.tirePressure;
	},

	deflate: () => {
		--state.tirePressure;
	}
});

export const Engine = (state) => ({
	run: () => {
		if(state.oilLevel <= 0) {
			throw new Error('car exploded');
		}

		--state.oilLevel;
	},

	printOil: () => {
		console.log(state.oilLevel);
	},

	changeOil: () => {
		state.oilLevel = 9;
	}
});