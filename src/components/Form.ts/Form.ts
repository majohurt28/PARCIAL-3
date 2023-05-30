
import formstyles from '../Form.ts/form.css';
import firebase from '../../utils/firebase';
import { recipe } from '../../types/recipe';

const imputs = {
    name: "",
    ingredients: "",
    instructions: "",
    image: "",

}

class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    submit() {
        console.log(imputs);
        firebase.addProduct(imputs);
      }

    render() { if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = formstyles;
        this.shadowRoot?.appendChild(css);

    }
        const Name = this.ownerDocument.createElement('label');
        Name.textContent = "Nombre de la receta"

        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change",(e: any) => {
            imputs.name = e.target.value;
        });

        const Ingredients = this.ownerDocument.createElement('label');
       Ingredients.textContent = "Ingredientes"

        const ingredients = this.ownerDocument.createElement('input');

        ingredients.addEventListener("change",(e: any) => {
            imputs.ingredients = e.target.value;
        });

        const Instructions = this.ownerDocument.createElement('label');
        Instructions.textContent = "Instrucciones"

         const instructions = this.ownerDocument.createElement('input');

         instructions.addEventListener("change",(e: any) => {
             imputs.instructions = e.target.value;
         });




        const saveB = this.ownerDocument.createElement('button');
        saveB.textContent = "save";
        saveB.addEventListener("click", this.submit);



       /* const uploadB = this.ownerDocument.createElement('button');
        uploadB.textContent = "Imagen";
        uploadB.addEventListener("click", "");
        }; */

        /* const recipes = await firebase.getProducts();
        recipes.forEach((p: recipe) => {
      const container = this.ownerDocument.createElement("section");
      const name = this.ownerDocument.createElement("h1");
      name.innerText = p.name;
      const ingredients = this.ownerDocument.createElement("h3");
      ingredients.innerText = p.ingredients;
      const instructions = this.ownerDocument.createElement("h4");
      instructions.innerText = p.instructions; */


      /* container.appendChild(name);
      container.appendChild(ingredients);
      container.appendChild(instructions);
 */


        this.shadowRoot?.appendChild(Name);
        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(Ingredients);
        this.shadowRoot?.appendChild(ingredients);
        this.shadowRoot?.appendChild(Instructions);
        this.shadowRoot?.appendChild(instructions);
        this.shadowRoot?.appendChild(saveB);
        /* this.shadowRoot?.appendChild(uploadB); */
    }
}



customElements.define('app-form', Form);
export default Form;