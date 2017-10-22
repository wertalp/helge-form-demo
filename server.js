/**
 * @Author: Patrick Wertal <wertalp>
 * @Date:   07-Oct-2017
 * @Email:  patrick.wertal@gmail.com
 * @Last modified by:   wertalp
 * @Last modified time: 22-Oct-2017
 * @License: Licenced by PW @2016
 */

 // server.js
 const express = require('express');
 const app = express();
 // Run the app by serving the static files
 // in the dist directory
 app.use(express.static(__dirname + '/dist'));
 // Start the app by listening on the default
 // Heroku port
 app.listen(process.env.PORT || 8080);
