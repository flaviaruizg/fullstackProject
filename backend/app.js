const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const mw = require('./utils/middlewares')

dotenv.config();

// rutas comunes
const indexRouter = require('./routes/index');



const signupRouter = require('./routes/signup');
const verifyRouter = require('./routes/verify');
const authRouter = require('./routes/auth');
const contactRouter = require('./routes/contact');
const recoveryRouter = require('./routes/recovery');
const changerPasswordRouter = require('./routes/changerPassword');
const gamesRouter = require('./routes/games');
const booksRouter = require('./routes/books');



const app = express();
app.use(cors());
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//rutas comunes
app.use('/', indexRouter);



app.use('/signup', signupRouter);
app.use('/verify', verifyRouter);
app.use('/auth', authRouter);
app.use('/contact', contactRouter);
app.use('/recovery', recoveryRouter);
app.use('/changerPassword', changerPasswordRouter);
app.use('/games', gamesRouter);
app.use('/books', booksRouter);



// user panel



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;