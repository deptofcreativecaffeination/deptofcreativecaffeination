import React, { PropTypes } from 'react';

function getAction(settings) {
  return `https://formspree.io/${settings.mailTo}`;
}

// TODO: subject should include email

function getSubject(settings) {
  return `${settings.subject}`;
}

// TODO: Form Validation

function ContactForm({ settings }) {
  return (
    <form action={getAction(settings)} method="POST" >
      <input name="name" type="text" placeholder="Your Name" />
      <input name="_replyto" type="email" placeholder="you@yourcompany.com" />
      <textarea
        name="message"
        placeholder="Tell us a bit about your project and goals."
      >
      </textarea>
      <input
        type="hidden"
        name="_next"
        value="//deptofcreativecaffeination.com/thanks.html"
      />
      <input
        type="hidden"
        name="_subject"
        value={ getSubject(settings) }
      />
      <input type="text" name="_gotcha" />
      <button type="submit">Send</button>
    </form>
  );
}

ContactForm.propTypes = {
  settings: PropTypes.object.isRequired,
};

export default ContactForm;
