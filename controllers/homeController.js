'use strict';

let Car = require('../models/car.js');

class HomeController {
	constructor(req, res) {
		this.req = req;
		this.res = res;
	}

	render() {
		let car = new Car(12);

		this.res.render('index', {
			subtitle: 'my sub',
			hp: car.getHp()
		});
	}
}

module.exports = HomeController;
