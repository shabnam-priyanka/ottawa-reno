import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { BookingContext } from '../Layout';

const BookingCard = (props) => {
    const { date, time } = props;

    const activeRouter = useRouter();
    const [bookingData, setBookingData] = useContext(BookingContext);

    const setAllBookingData = () => {
        const AllBookingData = { ...bookingData };
        AllBookingData.date = date;
        AllBookingData.bookingTime = time;
        setBookingData(AllBookingData);
    }
    
    return (
        <div className="booking-card">
            <h4>{bookingData.serviceName}</h4>
            <h5>1 hr</h5>
            <hr />
            <p>{date || bookingData.date}</p>
            <p>{time || bookingData.bookingTime}</p>
            {activeRouter.pathname == '/bookings_checkout_calendar' ? (
                <Link href="/booking_checkout_form">
                    <a>
                        <button onClick={setAllBookingData}>Next</button>
                    </a>
                </Link>
            ) : (
                <button>Submit</button>
            )}
        </div>
    );
};

export default BookingCard;
