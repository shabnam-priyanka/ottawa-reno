import React from 'react';
import BookingCard from '../components/ShareComponent/BookingCard';
import Navbar from '../components/ShareComponent/Navbar';

const booking_checkout_form = () => {
    const e = 6;
    return (
        <>
            <Navbar background="#27211E" />
            <div className="container-xl">
                <div className="row">
                    <div className="col-md-7">
                        {/* form starts */}
                        <h3>Customer Information</h3>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First name *"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last name *"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">
                                        <strong>Email *</strong>{' '}
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPhoneNumber">
                                        <strong>Phone Number *</strong>{' '}
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="inputPassword4"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">
                                    <strong>Address *</strong>{' '}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                    placeholder="1234 Main St"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress2">
                                    <strong>Address 2</strong>{' '}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress2"
                                    placeholder="Apartment, studio, or floor"
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">
                                        <strong>City *</strong>{' '}
                                    </label>
                                    <input type="text" className="form-control" id="inputCity" required />
                                </div>

                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">
                                        <strong>Postal Code *</strong>{' '}
                                    </label>
                                    <input type="text" className="form-control" id="inputZip" required />
                                </div>
                            </div>
                            <div className="form-group">

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">
                                        <strong>Detail Message</strong>{' '}
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                    </button>
                        </form>
                        <br />
                        <p>* Required Info</p>
                        <br />
                        {/* <form>
            <div class="row">
                <div class="col">
                <input type="text" class="form-control" placeholder="First name"/>
                </div>
                <div class="col">
                <input type="text" class="form-control" placeholder="Last name"/>
                </div>
            </div>
                                <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <select class="form-control">
                    <option>Bedroom Renovation</option>
                    <option>Living Room Renovation</option>
                    <option>Kitchen Renovation</option>
                    <option>Family Room Renovation</option>
                    <option>Porches & Decks </option>
                    <option>Stairs & Railings Renovation</option>
                    <option>Pergolas & Gazebos</option>
                    <option>Roof Top </option>
                    <option>HVAC Services</option>
                    <option>Mold Removal & Treatment</option>
                    </select>
                   
                  
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Detail Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    </form> */}
                    </div>
                    <div className="col-md-5">
                        <BookingCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default booking_checkout_form;
