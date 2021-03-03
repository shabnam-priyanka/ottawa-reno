import React from 'react';

// used materialize form not sure how to fix it
const ContactUs = () => {
    const kd = 4;
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
                            <form className="col s12">
                                <div className="row mb-0">
                                    <div className="input-field col s6">
                                        <input id="first_name" type="text" className="validate" />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="last_name" type="text" className="validate" />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="row mb-0">
                                    <div className="input-field col s6">
                                        <input id="phone" type="text" className="validate" />
                                        <label htmlFor="phone">phone</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="Address" type="text" className="validate" />
                                        <label htmlFor="Address">Address</label>
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="input-field col s12">
                                        <input id="subject" type="text" className="validate" />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea
                                            type="text"
                                            id="textarea1"
                                            className="materialize-textarea"
                                        />
                                        <label htmlFor="textarea1">Type your message here</label>
                                    </div>
                                </div>

                                <button
                                    className="btn contact-submit-btn waves-effect waves-light"
                                    type="submit"
                                    name="action"
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
