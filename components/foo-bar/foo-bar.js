import {Element as PolymerElement} from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/iron-icon/iron-icon.js';
import '../../node_modules/@polymer/iron-icons/iron-icons.js';

class FooBar extends PolymerElement {
	static get template() {
		return `
			<style>
				iron-icon {
					cursor: pointer;
				}
			</style>

			<h1>[[name]]</h1>
			<iron-icon icon="icons:search"></iron-icon>
		`;
	}

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

		let ironIcon = this.root.querySelector('iron-icon');
		ironIcon.addEventListener('click', () => {
			import('./node_modules/@polymer/paper-input/paper-input.js')
				.then(() => {
					this.root.innerHTML += `
						<br><br>
						<paper-input label="Dynamic Input"></paper-input>
					`;
		   });
		});
	}
}

customElements.define('foo-bar', FooBar);