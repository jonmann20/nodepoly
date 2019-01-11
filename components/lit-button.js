import {html, LitElement} from 'lit-element';

class LitButton extends LitElement {
    static get properties() {
        return {
            pressed: {type: Boolean}
        };
    }

    constructor() {
        super();
        this.pressed = false;
        console.log('pressed=', this.pressed);

        this.addEventListener('click', () => {
            this.pressed = !this.pressed;
        });
    }

    update() {
        super.update();
        console.log('pressed=', this.pressed);
    }

    render() {
        return html`
            <style>
                button {
                    border: 0;
                    border-radius: 2px;
                    color: #fff;
                    padding: 15px;
                    background: blue;
                    cursor: pointer;
                }

                button[pressed] {
                    background: red;
                }
            </style>

            <button ?pressed="${this.pressed}">Lit Button</button>
        `;
    }
}

customElements.define('lit-button', LitButton);