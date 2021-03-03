import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../components/ShareComponent/Navbar';


const bookings_checkout_calendar = () => {
    const [value, onChange] = useState(new Date());
    console.log(value)
    return (
        <>
            <Navbar background="#27211E" />
            <div className="checkout_calendar_area d-flex align-items-center">

                <section className="container-xl">
                    <div className="row">
                        <div className="col-md d-flex justify-content-center">
                            <div>
                                {/* <h5>today={()}</h5> */}
                                {/* <button onClick={()=>onChange(new Date().getDay())}>today</button> */}
                            <Calendar
                                
                                onChange={onChange}
                                value={value}
                                // selectRange={true}
                                // showDoubleView={true}
                                showFixedNumberOfWeeks={true}
                            />
                            </div>
                        </div>
                        <div className="col-md">
                            wow
                    </div>
                    </div>
                </section>
                <h1>nila</h1>
            </div>
        </>
    );
};

export default bookings_checkout_calendar;