import AlertMessage from './alert-message.mjs';

const components = {
    [AlertMessage.tag]: AlertMessage,
};

for (const component in components) {
    customElements.define(component, components[component]);
}
