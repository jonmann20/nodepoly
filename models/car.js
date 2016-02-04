'use strict';

class Car {
	constructor(horsePower) {
		this.hp = horsePower;
	}

	get isSportModel() {
    	return this.hp > 300;
  	}
}

module.exports = Car;
