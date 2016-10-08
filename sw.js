self.addEventListener('install', evt => {
	evt.waitUntil(
		caches.open("Uncle Jon's Bank").
			then(cache => cache.addAll(['swabout.html'])).
			catch(err => console.warn(err))
	);

	//new Request('about.html', {mode: 'no-cors'})).

				// ['https://web-jonmann20.c9users.io/about.html', 'a.js'].map(urlToPrefetch =>
				// 	new Request(urlToPrefetch, {mode: 'no-cors'}))).then(() =>
				// 		console.log('All resources have been fetched and cached.')
				// 	));
});

// self.addEventListener('fetch', e => {
// 	e.respondWith(
// 		caches.match(e.request).
// 			then(r => {//r => r || fetch(e.request, {mode: 'no-cors'}))
// 				console.log(r, e.request);
// 				return new Response('hi');
// 			}).
// 			catch(() => console.warn('not in cache'))
// 	);
// });