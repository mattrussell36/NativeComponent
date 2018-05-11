import AlertMessage from './alert-message.mjs';
import LContainer from './l-container.mjs';

const components = {
    [AlertMessage.tag]: AlertMessage,
    [LContainer.tag]: LContainer,
};

for (const component in components) {
    customElements.define(component, components[component]);
}
