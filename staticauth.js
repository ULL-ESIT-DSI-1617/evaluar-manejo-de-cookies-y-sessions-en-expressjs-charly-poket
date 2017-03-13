//authsession.js
"use strict";
let express = require('express'),
  app = express(),
  session = require('express-session');
let cookieParser = require('cookie-parser');
let path = require('path');
let util = require("util");
let bcrypt = require("bcrypt-nodejs");
let hash = bcrypt.hashSync("amyspassword");

let instructions = `
Visit these urls in the browser:
<ul>
  <li> <a href="http://localhost:3000/content">localhost:3000/content</a> </li>
  <li> <a href="http://localhost:3000/content/chapter1.html">localhost:3000/content/chapter1.html</a> </li>
  <li> <a href="http://localhost:3000/login?username=juan&password=juanspassword">localhost:3000/login?username=juan&password=juanspassword</a> </li>
  <li> <a href="http://localhost:3000/login?username=amy&password=amyspassword">localhost:3000/login?username=amy&password=amyspassword</a> </li>
  <li> <a href="http://localhost:3000/logout">localhost:3000/logout</a> </li>
</ul>
`;
