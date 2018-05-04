class Component extends HTMLElement {
    constructor(component) {
        super();

        this.template = component.template;
        this.styles = component.styles;

        this.initialProps = this.createProps(this.attributes);

        this.shadow = this.attachShadow({ mode: 'open' });
        this.renderShadowDOM();
    }

    renderShadowDOM(props) {
        const styles = `
            <style>
                ${this.styles}
            </style>
        `;

        const html = this.template(
            Object.assign({}, this.initialProps, props)
        );

        this.shadow.innerHTML = styles + html;
    }

    createProps(attributes) {
        return Array.from(attributes).reduce((obj, attr) => {
            obj[attr.name] = attr.value;
            return obj;
        }, {});
    }
}

export default Component;