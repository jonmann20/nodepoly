'use strict';

class Car {
	constructor(horsePower) {
		this.hp = horsePower;
	}

	getHp() {
		return this.hp;
	}
}

module.exports = Car;

/*
 * negatives compared to dart:
 *
 * 1) use strict
 * 2) module.exports
 * 3) constructor
 * 4) no private properties
 * 5) this
 * 6) no static types
 */
