import { login } from '../data/user.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler, updateNav } from '../utils.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
  <div class="form">
    <h2>Login</h2>
    <form @submit=${onSubmit} class="login-form">
      <input type="text" name="email" id="email" placeholder="email" />
      <input type="password" name="password" id="password" placeholder="password" />
      <button type="submit">Login</button>
      <p class="message">Not registered? <a href="/register">Create an account</a></p>
    </form>
  </div>
</section>`;

export function showLoginView() {
    render(loginTemplate(createSubmitHandler(onSubmit)));
}

async function onSubmit({ email, password }) {
    if (!email || !password) {
        return alert('All fields are required!');
    }

    await login(email, password);
    updateNav();
    page.redirect('/');
}
