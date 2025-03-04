import { html, render } from "../node_modules/lit-html/development/lit-html.js";
import { contacts } from "./contacts.js";

const cardTemplate = (data) => html`
  <div class="contact card">
    <div>
      <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
      <h2>Name: ${data.name}</h2>
      <button @click=${toggleDetails.bind(data)} class="detailsBtn">Details</button>
      ${data.details
        ? html`
          <div class="details" id=${data.id}>
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
          </div>`
        : null}
    </div>
  </div>`;

const container = document.getElementById("contacts");

function update() {
  render(contacts.map(cardTemplate), container);
}

function toggleDetails() {
  this.details = !this.details;
  update();
}

update();


//! function showDetails({target :btn }) {  // rename target to btn
  
