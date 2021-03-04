import emailjs from 'emailjs-com';
import React from 'react';
// used materialize form not sure how to fix it
const ContactUs = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        // console.log(e.target)
        emailjs.sendForm('service_sec3z77', 'template_mluyb9a', e.target, 'user_0yuaPtVVcqCviBr9iMWOc')
            .then((result) => {
                if (result) {
                    alert("✅Your message has been sent successfully✅")
                }
                console.log(result.text);
            }, (error) => {
                if (error) {
                    alert("⚠Sorry, your message could not be sent. Please try again🔄")
                }
                console.log(error.text);
            });
    }


    return (
        <div className="contact-area d-flex align-items-center">
            <section className="container-xl">
                <div className="row  align-items-center">
                    <div className="col-md text-center">
                        <h2>ContactUs</h2>
                        <p>Info@Vegahomes.com</p>

                        <p> 1+ (613)-413-7941</p>
                    </div>
                    <div className="col-md">
                        <div className="row">
                            <form onSubmit={sendEmail} className="col s12">
                                <div className="row mb-0">
                                    <div className="input-field col s6">
                                        <input name="firstName" id="first_name" type="text" className="validate" />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input name="lastName" id="last_name" type="text" className="validate" />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="row mb-0">
                                    <div className="input-field col s6">
                                        <input name="phone" id="phone" type="text" className="validate" />
                                        <label htmlFor="phone">phone</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input name="address" id="Address" type="text" className="validate" />
                                        <label htmlFor="Address">Address</label>
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="input-field col s12">
                                        <input name="subject" id="subject" type="text" className="validate" />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="input-field col s12">
                                        <input name="email" id="email" type="email" className="validate" />
                                        <label htmlFor="email">email</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea
                                            name="message"
                                            type="text"
                                            id="textarea1"
                                            className="materialize-textarea"
                                        />
                                        <label htmlFor="textarea1">Type your message here</label>
                                    </div>
                                </div>

                                <button
                                    className="btn contact-submit-btn "
                                    type="submit"
                                    value="Send"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
