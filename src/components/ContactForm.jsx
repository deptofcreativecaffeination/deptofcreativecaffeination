import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { isEmail } from 'validator';
import request from 'superagent';
import Input from './Input';
import TextArea from './TextArea';

const ContactForm = React.createClass({
  propTypes: {
    mailTo: PropTypes.string.isRequired,
    subjectPrefix: PropTypes.string,
  },

  getDefaultProps() {
    return {
      subjectPrefix: '[NEW CONTACT]',
    };
  },

  getInitialState() {
    return {
      name: '',
      isNameValid: false,
      email: '',
      isEmailValid: false,
      message: '',
      isMessageValid: false,
    };
  },

  getFormClassNames() {
    // check em all
    const allGood = [
      this.state.isNameValid,
      this.state.isEmailValid,
      this.state.isMessageValid,
    ].every(item => !!item);

    if (allGood) {
      return 'is-valid';
    }

    return null;
  },

  getSubject() {
    return [
      this.props.subjectPrefix,
      this.state.name,
      this.state.email,
    ].join(' ');
  },

  handleNameChange(event) {
    const name = event.target.value;
    this.setState({
      name,
      isNameValid: (name.length > 0),
    });
  },

  handleEmailChange(event) {
    const email = event.target.value;
    this.setState({
      email,
      isEmailValid: isEmail(email),
    });
  },

  handleMessageChange(event) {
    const message = event.target.value;
    this.setState({
      message,
      isMessageValid: (message.length > 0),
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    // check if _gotcha is filled in

    // AJAX it for formspree
    request
      .post('https://formspree.io/hello@deptofcreativecaffeination.com')
      .send({
        name: this.state.name,
        email: this.state.email,
        _subject: this.getSubject(),
        message: this.state.message,
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          console.error(err.message);
          return;
        }
        console.info(res);

        // reset state
        this.setState(this.getInitialState());

        // redirect to thankyou page
        browserHistory.push('/thanks');
      });
  },

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={this.getFormClassNames()}
      >
        <Input
          name="name"
          type="text"
          placeholder="Your Name"
          value={this.state.name}
          isValid={this.state.isNameValid}
          handleChange={this.handleNameChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="you@yourcompany.com"
          value={this.state.email}
          isValid={this.state.isEmailValid}
          handleChange={this.handleEmailChange}
        />
        <TextArea
          name="message"
          placeholder="Tell us a bit about your project and goals."
          value={this.state.message}
          isValid={this.state.isMessageValid}
          handleChange={this.handleMessageChange}
        />
        <input type="text" name="_gotcha" />
        <button type="submit">Send</button>
      </form>
    );
  },
});

export default ContactForm;
