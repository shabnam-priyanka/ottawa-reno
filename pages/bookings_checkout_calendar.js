import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BookingCard from '../components/ShareComponent/BookingCard';
import Navbar from '../components/ShareComponent/Navbar';

const morning = [
    { time: '9:00am', date: '2021-3-18' },
    { time: '9:30am', date: '2021-3-18' },
    { time: '10:00am', date: '2021-3-18' },
    { time: '10:30am', date: '2021-3-18' },
    { time: '11:00am', date: '2021-3-18' },
    { time: '11:30am', date: '2021-3-18' },
];

const afternoon = [
    { time: '12:00am', date: '2021-3-18' },
    { time: '12:30am', date: '2021-3-18' },
    { time: '01:00am', date: '2021-3-18' },
    { time: '01:30am', date: '2021-3-18' },
    { time: '02:00am', date: '2021-3-18' },
    { time: '02:30am', date: '2021-3-18' },
    { time: '03:00am', date: '2021-3-18' },
    { time: '03:30am', date: '2021-3-18' },
    { time: '04:00am', date: '2021-3-18' },
    { time: '04:30am', date: '2021-3-18' },
];

const evening = [{ time: '04:30am', date: '2021-3-18' }];

const bookings_checkout_calendar = () => {
    const [value, onChange] = useState(new Date());
    console.log(value);

    const today = value;
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    console.log(date);

    const morningDates = morning.map((morn) => (
        <div key={morn.time} className="time-cards">
            {morn.time}
        </div>
    ));

    const afternoonDates = morning.map((afte) => (
        <div key={afte.time} className="time-cards">
            {afte.time}
        </div>
    ));

    const eveningDates = morning.map((eve) => (
        <div key={eve.time} className="time-cards">
            {eve.time}
        </div>
    ));

    return (
        <>
            <Navbar background="#27211E" />
            <div className="checkout_calendar_area d-flex align-items-center">
                <section className="container-xl">
                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="text-center">{date}</h5>
                            <div className="d-flex justify-content-center">
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                    showFixedNumberOfWeeks
                                />
                            </div>
                            <div className="row text-center mt-5">
                                <div className="col-md-4">
                                    <h5>Morning</h5>
                                    {morningDates}
                                </div>
                                <div className="col-md-4">
                                    <h5>Afternoon</h5>
                                    {afternoonDates}
                                </div>
                                <div className="col-md-4">
                                    <h5>Evening</h5>
                                    {eveningDates}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <BookingCard/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default bookings_checkout_calendar;



