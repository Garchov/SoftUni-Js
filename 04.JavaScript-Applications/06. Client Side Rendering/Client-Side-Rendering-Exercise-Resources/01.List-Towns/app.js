import {html, render} from "./node_modules/lit-html/lit-html.js";

const form=document.querySelector('form');
const root=document.getElementById('root');

form.addEventListener('submit',onSubmit);


function onSubmit(e){
    e.preventDefault();
    const formData=new FormData(e.target);
    const {towns} = Object.fromEntries(formData);
 
    const townsAsArr=towns.split(", ");
    debugger
   const htmlUl= createUl(townsAsArr);
render(htmlUl, root)
}

function createUl(towns){
return html`
<ul>
${towns.map(town => html`<li>${town}</li>`)}
</ul>`
}