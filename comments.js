// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 3000;

var server = http.createServer(function (req, res) {
    var url_parts = url.parse(req.url);
    var path = url_parts.pathname;
    var query = url_parts.query;

    console.log(path);
    console.log(query);    function addNumbers(a, b) {
        return a + b;
    }
