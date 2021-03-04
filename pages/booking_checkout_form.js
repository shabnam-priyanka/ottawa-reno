import React, { useContext } from 'react';
import { BookingContext } from '../components/Layout';
import BookingCard from '../components/ShareComponent/BookingCard';
import Navbar from '../components/ShareComponent/Navbar';

const booking_checkout_form = () => {
    const [bookingData, setBookingData] = useContext(BookingContext);

    return (
        <>
            <Navbar background="#27211E" />
            <div className="container-xl">
                <div className="row booking-checkout-form">
                    <div className="col-md-7">
                        {/* form starts */}
                        <h3 className='mt-2'>Customer Information</h3>
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
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"placeholder="Email *"
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="inputPhoneNumber" placeholder="Phone Number *"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                    placeholder="Address *"
                                    required
                                />
                            </div>
                    
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCity" placeholder="City *"
                                        required
                                    />
                                </div>

                                <div className="form-group col-md-2">
                                    
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputZip" placeholder="Postal Code *"
                                        required
                                    />
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
