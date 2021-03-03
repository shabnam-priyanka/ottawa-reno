import React, { useState } from 'react';

const FakeDataRenovations = [
    {
        id: 1,
        img: "https://www.w3schools.com/css/img_forest.jpg",
        name: "Kitchen Renovations",
        time: "1 hr",
    },
    {
        id: 2,
        img: "https://www.w3schools.com/css/img_forest.jpg",
        name: "Kitchen Renovations",
        time: "1 hr",
    },
    {
        id: 3,
        img: "https://www.w3schools.com/css/img_forest.jpg",
        name: "Kitchen Renovations",
        time: "1 hr",
    },
    {
        id: 4,
        img: "https://www.w3schools.com/css/img_forest.jpg",
        name: "Kitchen Renovations",
        time: "1 hr",
    },
    {
        id: 5,
        img: "https://www.w3schools.com/css/img_forest.jpg",
        name: "Kitchen Renovations",
        time: "1 hr",
    },
]

const Renovations = () => {
    const [renoDaa, setRenoData] = useState(FakeDataRenovations);

    return (
        <div className="renovations-area align-items-center">
            {renoDaa.map(rno =>

                <section key={rno.id} className="container-xl">
                    <div className="renovation-contents">
                        <div className="row">
                            <div className="col-lg-7 renovations-img-div">
                                <img className="img-fluid" src="/images/Reno1.webp" alt="img" />
                            </div>
                            <div className="col-lg-6 renovations-content-div">
                                <h2>Kitchen Renovations</h2>
                                <hr />
                                <h5>1 hr</h5>
                                <button type="button">Book Free Consultation</button>
                            </div>
                        </div>
                    </div>
                </section>

            )}

        </div>
    );
};

export default Renovations;
