import Link from 'next/link';

const book = [
    {
        id: 0,
        name: 'Kitchen Renovation',
        details: 'We are specialized in modern kitchen design',
        img: 'https://i.imgur.com/kJvTuYb.jpg',
    },
    {
        id: 1,
        name: 'Living Room Renovation',
        details: 'Quality of our work will fulfill your dream living area',
        img: 'https://i.imgur.com/hDHv43p.jpg',
    },
    {
        id: 2,
        name: 'Bedroom Renovation',
        details: 'We will delivery the best Modern bedroom',
        img: 'https://i.imgur.com/tkn4HoF.jpg',
    },
    {
        id: 3,
        name: 'Bathroom Renovation',
        details: 'We will delivery the best Modern bedroom',
        img:
            'https://i.imgur.com/scTHpKs.jpg://media.istockphoto.com/photos/beautiful-kitchen-in-new-home-with-island-pendant-lights-and-hardwood-picture-id1210163691?b=1&k=6&m=1210163691&s=170667a&w=0&h=pCFHi9gG0e800tYaLJzy7LTbjCC8mqwiKLy-geP6OWk=',
    },
];

const BookOnline = () => {
    const bookingList = book.map((booking) => {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={booking.img} alt="img" />
                    <span className="card-title">{booking.title}</span>
                </div>
                <div className="card-content">
                    <p>{booking.details}</p>
                    <div className="card-action">
                        <Link href="/">
                            <a>Book for Consultation</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <h1>Shabnam code here</h1>
            <div className="rootCard">{bookingList}</div>
        </div>
    );
};

export default BookOnline;
