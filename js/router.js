'use strict';

var pages = document.querySelector('iron-pages');

page('/', () => {
	pages.select('/');
});

page('/away', () => {
	console.log('away');
	pages.select('/away');
});

page();
