const del = require('del');
const path = require("../config/path.js")

const clear = () => {
    return del([
        path.root,
        path.fontD
    ]);
};

module.exports = clear;