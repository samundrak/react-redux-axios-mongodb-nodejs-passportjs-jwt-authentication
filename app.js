const express = require('express'),
    webpack = require('webpack'),
    path = require('path'),
    config = require('./webpack.config.dev'),
    appConfig = require('./config/app'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator');

/* eslint-disable no-console */
/* global global */
global.config = () => {
    return appConfig;
};

global.db = require('./server/database/mongo');
global.helper = require('./server/utils/helper');
global.Promsie = require('promise');
global._ = require('lodash');


const app = express();
const routes = require('./server/routes')(app);
const auth = require('./config/auth')();
const compiler = webpack(config);
const port = appConfig.app.port;
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(cookieParser());
app.use(auth.initialize());
app.use((req, res, next)=> {
    req.error = (data, httpCode)=> {
        console.log(data)
        data = Object.assign(data || {}, {});
        return res.status(httpCode || 500).send(data);
    };

    req.success = (data, httpCode) => {
        data = Object.assign(data || {}, {});
        return res.status(httpCode || 200).send(data);
    };

    return next();
});
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
// view engine setup
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'jade');
app.use('/', routes);
app.use('/api', auth.authenticate(), require('./server/routes/api'));

app.use(require('webpack-hot-middleware')(compiler));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});