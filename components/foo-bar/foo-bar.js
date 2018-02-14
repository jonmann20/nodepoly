class FooBar extends HTMLElement {
	constructor() {
		super();
		this.name = 'FooBar';
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({mode: 'closed'});
		shadowRoot.innerHTML = `<h1>${this.name}</h1>`;
	}
}

customElements.define('foo-bar', FooBar);