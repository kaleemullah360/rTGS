var message = "";
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
var mqtt = require('mqtt')
  , client = mqtt.connect();

client.subscribe('iot-2/evt/status/fmt/json');
client.on('message', function(topic, message) {
  console.log(decoder.write(message));
});
  res.send(message);
});

module.exports = router;
