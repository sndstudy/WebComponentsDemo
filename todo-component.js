class ToDoComponent extends HTMLElement {
    constructor(){
        super();
        console.log('todo constructor');
    }

    connectedCallback() {
        this.innerHTML = `<div>${this.getAttribute('data-title')}</div><div>${this.getAttribute('data-detail')}</div>`;
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

window.customElements.define('todo-component', ToDoComponent);