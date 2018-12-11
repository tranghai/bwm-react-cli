const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const FakeDb = require('./fake-db');
const path = require('path');

const rentalRoutes = require('./routers/rentals'),
    userRoutes = require('./routers/users'),
    bookingRoutes = require('./routers/bookings');


mongoose.connect(config.DB_URL)
    .then(() => {
        console.log('Connected MongoDb');
        if (process.env.NODE_ENV !== 'production') {
            //const fakeDb = new FakeDb();
            //fakeDb.seedDb();
        }
    })
    .catch(err => console.error('Can not connect MongoDb', err));

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/bookings', bookingRoutes);

if (process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '..', 'build');
    app.use(express.static(appPath));

    app.get('*', function (req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'));
    });
}

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Listing server PORT ${PORT}`);
})