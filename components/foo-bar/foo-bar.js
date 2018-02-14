import {Element as PolymerElement} from '../../node_modules/@polymer/polymer/polymer-element.js';
//import {LitElement, html} from '../../node_modules/lit-element/lit-element.js';

import '../../node_modules/@polymer/paper-button/paper-button.js';
import '../../node_modules/@polymer/iron-icon/iron-icon.js';
import '../../node_modules/@polymer/iron-icons/iron-icons.js';

//import {html, render} from '../../node_modules/lit-html/lit-html.js';

class FooBar extends PolymerElement {
	static get template() {
		// return html`
		// 	<h1>[[name]]</h1>
		// 	<iron-icon icon="icons:search"></iron-icon>
		// `;

		return `
			<style>
				iron-icon {
					cursor: pointer;
				}
			</style>

			<h1>[[name]]</h1>
			<paper-button raised>Load input</paper-button>
		`;
	}

	// render({name}) {
	// 	return html`
	// 		<h1>[[name]]</h1>
	// 	`;
	// }

	static get properties() {
		return {
			name: {
				type: String,
				value: 'FooBar'
			}
		}
	}

	connectedCallback() {
		super.connectedCallback();

		let paperButton = this.root.querySelector('paper-button');
		paperButton.addEventListener('click', () => {
			import('../../node_modules/@polymer/paper-input/paper-input.js')
				.then(() => {
					this.root.innerHTML += `
						<br><br>
						<paper-input label="Dynamic Input"></paper-input>
						<iron-icon icon="icons:search"></iron-icon>
					`;
		   });
		});
	}
}

customElements.define('foo-bar', FooBar);