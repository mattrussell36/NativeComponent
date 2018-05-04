import Component from './component.mjs';

export default class AlertMessage extends Component {
    static get tag() {
        return 'alert-message';
    }

    // props
    static get observedAttributes() {
        return ['text', 'foo'];
    }

    constructor() {
        const component = {
            template: (props) => (`
                <div class="alert-message">
                    <p>${props.text} - ${props.foo}</p>
                    <slot name="children" />
                </div>
            `),
            styles: `
                .alert-message {
                    background: lightgreen;
                }
            `,
        };

        super(component);
    }

    connectedCallback() {
        console.log('connected');
    }

    disconnectedCallback() {
        console.log('disconnected');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === null) {
            return;
        }

        this.renderShadowDOM({
            [name]: newValue,
        });
    }
}
