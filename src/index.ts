import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const Form = this.ownerDocument.createElement('app-form');
        this.shadowRoot?.appendChild(Form);
    }
}

customElements.define('app-container', AppContainer)