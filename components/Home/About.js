import React from 'react';

const About = () => {
    const hello = 44;
    return (
        <div className="about-area d-flex align-items-center">
            <section className="container-xl">
                <div className="row d-flex align-items-center">
                    <div className="col-md">
                        <h2>About Our Company</h2>
                        <p>
                            Our company is a specialist in home design and total home renovation. We
                            provide service locally in Ottawa as well as the Greater Ottawa Area.
                            Our core values revolve around providing our clients with excellent
                            customer service and a worry-free renovation process. Whether you want
                            an addition to your current home, renovate your kitchen or bathroom we
                            will work with you every step of the way to ensure your satisfaction.
                        </p>
                    </div>
                    <div className="col-md">
                        <img
                            className="img-fluid"
                            src="/images/AboutCompany.webp"
                            alt="about img"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
