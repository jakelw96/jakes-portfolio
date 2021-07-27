import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [ errorMessage, setErrorMessage ] = useState('');

    function handleChange(data) {
        if (data.target.name === 'email') {
            const isValid = validateEmail(data.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('')
            }
        } else {
            if (!data.target.value.length) {
                setErrorMessage(`${data.target.name} is required.`)
            } else {
                setErrorMessage('')
            }
        }
    }

    function handleSubmit(data) {
        data.preventDefault();
        if (!errorMessage) {
            setFormState({ [data.target.name]: data.target.value });
        }
    }

    return (
        <section className="project">
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    );
};


export default ContactForm