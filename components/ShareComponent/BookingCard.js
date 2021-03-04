import Link from "next/link";
import { useRouter } from "next/router";
import React from 'react';

const BookingCard = () => {
    const activeRouter = useRouter()
    console.log(activeRouter)
    return (
        <div className="booking-card">
            <h4>Kitchen Renovations</h4>
            <h5>1 hr</h5>
            <hr />
            <p>March 22, 2021 10:00 am</p>
            <p>Marc Perron</p>
            {activeRouter.pathname == '/bookings_checkout_calendar'
                ?
                <Link href="/booking_checkout_form">
                    <a><button>Next</button></a>
                </Link>
                :
                <button>Submit</button>
            }

        </div>
    );
};

export default BookingCard;