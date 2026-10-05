'use strict';
/* Demo forms do not send anything. They show what the client's customers would see. */
document.querySelectorAll('.book').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.createElement('p');
    msg.className = 'done';
    msg.setAttribute('role', 'status');
    msg.textContent = form.dataset.done;
    form.replaceChildren(msg);
  });
});
