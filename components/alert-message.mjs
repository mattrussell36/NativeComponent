import Component from './component.mjs';

export const AlertMessageTag = 'alert-message';


export class AlertMessage extends Component {
    constructor() {
        const render = props => (`
            <div>${props.text} - ${props.foo}</div>
        `);

        super(render);
    }

    // props
    static get observedAttributes() {
        return ['text', 'foo'];
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
