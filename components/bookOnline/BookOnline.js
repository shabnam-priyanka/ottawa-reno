import Link from 'next/link';

const book = [
    {
        id: 0,
        name: 'Kitchen Renovation',
        img: 'https://i.imgur.com/kJvTuYb.jpg',
    },
    {
        id: 1,
        name: 'Living Room Renovation',
        img: 'https://i.imgur.com/hDHv43p.jpg',
    },
    {
        id: 2,
        name: 'Bedroom Renovation',
        img: 'https://i.imgur.com/tkn4HoF.jpg',
    },
    {
        id: 3,
        name: 'Bathroom Renovation',
        img:
            'https://i.imgur.com/scTHpKs.jpg://media.istockphoto.com/photos/beautiful-kitchen-in-new-home-with-island-pendant-lights-and-hardwood-picture-id1210163691?b=1&k=6&m=1210163691&s=170667a&w=0&h=pCFHi9gG0e800tYaLJzy7LTbjCC8mqwiKLy-geP6OWk=',
    },
    {
        id: 4,
        name: 'Family Room',
        img:
            'https://i.imgur.com/bc5K5Tu.jpg',
    },
    {
        id: 5,
        name: 'Porches & Decks',
        img:
            'https://i.imgur.com/JdP4fwX.jpg',
    },
    {
        id: 6,
        name: 'Stairs & Railings',
        img:
            'https://i.imgur.com/TKI0key.jpg',
    },
    {
        id: 7,
        name: 'Pergolas & Gazebos',
        img:
            'https://i.imgur.com/ArYRpwE.jpg',
    },
    {
        id: 8,
        name: 'Roof Top',
        img:
            'https://i.imgur.com/RkTGnqU.jpg',
    },
    {
        id: 9,
        name: 'HVAC Services',
        img:
            'https://i.imgur.com/k4jXA7y.jpg',
    },
    {
        id: 10,
        name: 'Mold Removal & Treatment',
        img:
            'https://i.imgur.com/NpOiyM9.jpg',
    },
];

const BookOnline = () => {
    const bookingList = book.map((booking) => {
        return (
            <div key={booking.id} className="card">
                <div className="card-image">
                    <img src={booking.img} alt="img" />
                    <span className="card-title">{booking.title}</span>
                </div>
                
                <div className="card-content text-center">
                    <p>{booking.name}</p>
                    <div className="card-action">
                        <Link href="/bookings_checkout_calendar">
                            <a><button className='book-btn mt-3'>Book for Consultation</button> </a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container-xl">
            <div className="rootCard">{bookingList}</div>
        </div>
    );
};

export default BookOnline;
