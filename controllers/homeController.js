'use strict';

let Car = require('../models/car.js');

class HomeController {
	constructor(req, res) {
		this.req = req;
		this.res = res;
	}

	render() {
		let car = new Car(335);

		this.res.render('index.html', {
			car: car
		});
	}
}

module.exports = HomeController;
