'use strict';

let app = document.querySelector('#app');

// routing
page('/', () => {
	app.title = 'Home';
	app.route = 'home';
});

page('/away', () => {
	app.title = 'Away';
	app.route = 'away';
});

page();