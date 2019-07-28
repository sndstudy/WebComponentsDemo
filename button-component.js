class ButtonComponent extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `<button class="ui-button ui-widget ui-corner-all">${this.innerText}</button>`;
        console.log('button constructor');
    }

    connectedCallback() {
        console.log('connectedCallback');
    }
    disconnectedCallback() {
        console.log('disconnectedCallback');
    }
    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
        console.log('attributeChangedCallback');
    }
    adoptedCallback(oldDocument, newDocument){
        console.log('adoptedCallback');
    }
}

window.customElements.define('button-component', ButtonComponent);