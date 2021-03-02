import React, { useState } from 'react';

const FakeDataRenovations = [
    {
        id: 1,
        img: "https://i.imgur.com/hDHv43p.jpg",
        name: "Living Room Renovation",
        time: "1 hr",
    },
    {
        id: 2,
        img: "https://i.imgur.com/kJvTuYb.jpg",
        name: "Kitchen Renovations",
        time: "1 hr",
    },
    // {
    //     id: 3,
    //     img: "https://i.imgur.com/tkn4HoF.jpg",
    //     name: "Bedroom Renovation",
    //     time: "1 hr",
    // },
    // {
    //     id: 4,
    //     img: "https://www.w3schools.com/css/img_forest.jpg",
    //     name: " Renovations",
    //     time: "1 hr",
    // },
    {
        id: 5,
        img: "https://i.imgur.com/JdP4fwX.jpg",
        name: "Porches & Decks",
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
                                <img className="img-fluid w-100" src={rno.img} alt="img" />
                            </div>
                            <div className="col-lg-6 renovations-content-div">
                                <h2>{rno.name}</h2>
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
