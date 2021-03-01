import React from 'react';

const Renovations = () => {
    const sks = 5;
    return (
        <div className="renovations-area  d-flex align-items-center">
            <section className="container-xl renovation-contents">
                <div className="row">
                    <div className="col-md-7 renovations-img-div">
                        <img className="img-fluid" src="/images/Reno1.webp" alt="img" />
                    </div>
                    <div className="col-md-5 renovations-content-div">
                        <h1 className="border-bottom">hel</h1>
                        <h5>1 hr</h5>
                        <button type="button">Book Free Consultation</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Renovations;
