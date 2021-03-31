const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
require('dotenv').config();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const listingsRouter = require('./routes/listings');
const loginRouter = require('./routes/login');
const reviewsRouter = require('./routes/reviews');
const bookingsRouter = require('./routes/bookings');

const app = express();

const PORT = process.env.PORT || '3001';

app.use(express.static('public'));
app.use(cookieParser());
app.use(fileUpload({ createParentPath: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/listings', listingsRouter);
app.use('/login', loginRouter);
app.use('/reviews', reviewsRouter);
app.use('/bookings', bookingsRouter);

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// // error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
