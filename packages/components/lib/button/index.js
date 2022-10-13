"use strict";
const button = require("./button.js");
const withInstall = require("../utils/with-install.js");
const Button = withInstall.withInstall(button);
module.exports = Button;
