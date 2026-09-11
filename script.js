// Story submission form.
//
// No backend exists yet. This currently just swaps the form for the
// thank-you message on submit, matching the design prototype. Wire it to
// a static-friendly endpoint (Formspree, Netlify Forms, Google Form) by
// posting `form` data there before showing the thank-you message.
const form = document.getElementById('story-form');
const thanks = document.getElementById('thanks');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.hidden = true;
  thanks.hidden = false;
});
