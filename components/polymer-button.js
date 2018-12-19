import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';

class PolymerButton extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                    font-family: sans-serif;
                }
                
                button {
                    border: 0;
                    border-radius: 2px;
                    padding: 15px;
                    color: #fff;
                    background: rebeccapurple;
                }
            </style>

            <button>Polymer Button</button>
        `;
    }
}

customElements.define('polymer-button', PolymerButton);