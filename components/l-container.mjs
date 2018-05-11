import Component from './component.mjs';

export default class LContainer extends Component {
    static get tag() {
        return 'l-container';
    }

    // props
    static get observedAttributes() {
        return ['classname'];
    }

    constructor() {
        const component = {
            template: (props) => (`
                <div class="l-container">
                    <slot name="children" />
                </div>
            `),
            styles: `
                .l-container {
                    max-width: 500px;
                    display: block;
                    margin: 20px auto;
                    background-color: #90e5ee;
                    padding: 20px;
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
