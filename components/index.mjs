import { AlertMessageTag, AlertMessage } from './alert-message.mjs';

const components = {
    [AlertMessageTag]: AlertMessage,
};

for (const component in components) {
    customElements.define(component, components[component]);
}
