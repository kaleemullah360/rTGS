const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
var express = require('express');
var router = express.Router();

// the same connection is opened in another js page
/*
var URL = require('url')
var opts = URL.parse('coap://[aaaa::c30c:0:0:2]:5683/test/push')
opts.observe = true

const coap  = require('coap') // or coap
    , req   = coap.request(opts);

req.on('response', function(res) {
  res.pipe(process.stdout);
  console.log(decoder.write(res.payload));
})
req.end();
*/
/* GET home page. */
router.get('/', function(req, resp, next) {
  resp.send("This is view");
});

module.exports = router;