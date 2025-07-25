var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var menuRouter = require('./routes/Menu');
var usersRouter = require('./routes/Menuitem');
const ConnectDb=require('./Confiq/ConnectDb')
const  cors=require('cors')
require('dotenv').config()

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: 'https://deep-net-frontend-nine.vercel.app', credentials: true }));

app.use('/', menuRouter);
app.use('/', usersRouter);




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

ConnectDb()

const PORT=process.env.PORT  || 3000

app.listen(PORT,()=>{
  console.log(`Server Running ${PORT}`);
  
})
module.exports = app;
