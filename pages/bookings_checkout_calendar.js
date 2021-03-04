import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BookingContext } from '../components/Layout';
import BookingCard from '../components/ShareComponent/BookingCard';
import Navbar from '../components/ShareComponent/Navbar';

const morning = [
    { time: '7:00am', date: '2021-3-18' },
    { time: '8:00am', date: '2021-3-18' },
    { time: '9:00am', date: '2021-3-18' },
    { time: '10:30am', date: '2021-3-18' },
    { time: '11:00am', date: '2021-3-18' },
];

const afternoon = [
    { time: '12:00am', date: '2021-3-18' },
    { time: '01:00am', date: '2021-3-18' },
    { time: '02:00am', date: '2021-3-18' },
    { time: '03:00am', date: '2021-3-18' },
    { time: '04:00am', date: '2021-3-18' },
    { time: '05:00am', date: '2021-3-18' },
];

const evening = [
    { time: '06:00am', date: '2021-3-18' },
    { time: '07:00am', date: '2021-3-18' },
];

const bookings_checkout_calendar = () => {

    const { bookingData, setBookingData } = useContext(BookingContext);

    const [time, setTime] = useState('')

    const [value, onChange] = useState(new Date());

    const today = value;
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;


    const morningDates = morning.map((morn) => (
        <div onClick={() => setTime(morn.time + " Morning")} key={morn.time} className="time-cards">
            {morn.time}
        </div>
    ));

    const afternoonDates = afternoon.map((afte) => (
        <div onClick={() => setTime(afte.time + " Afternoon")} key={afte.time} className="time-cards">
            {afte.time}
        </div>
    ));

    const eveningDates = evening.map((eve) => (
        <div onClick={() => setTime(eve.time + " Evening")} key={eve.time} className="time-cards">
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
                                    <div className="time-cards">
                                        Sunday off
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <BookingCard time={time} date={date} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default bookings_checkout_calendar;
