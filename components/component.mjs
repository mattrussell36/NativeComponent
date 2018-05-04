class Component extends HTMLElement {
    constructor(render) {
        super();

        this.render = render;

        this.initialProps = this.createProps(this.attributes);

        this.shadow = this.attachShadow({ mode: 'open' });
        this.renderShadowDOM();
    }

    renderShadowDOM(props) {
        this.shadow.innerHTML = this.render(
            Object.assign({}, this.initialProps, props)
        );
    }

    createProps(attributes) {
        return Array.from(attributes).reduce((obj, attr) => {
            obj[attr.name] = attr.value;
            return obj;
        }, {});
    }
}

export default Component;