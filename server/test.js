const F1TelemetryClient  = require("f1-2021-udp");
/*
*   'port' is optional, defaults to 20777

*   'bigintEnabled' is optional, defaults to true
     setting it to false makes the parser skip bigint values

*   'binaryButtonFlags' is optional, defaults to false
     setting it to true makes the parser return an object 
     with a binary flag for every button

*   'forwardAddresses' is optional, defaults to undefined
    it's an array of Address objects to forward unparsed telemetry to.
    each address object is comprised of a port and an optional ip address

*   'skipParsing' is optional, defaults to false
    setting it to true will make the client not parse and emit content.
    You can consume telemetry data using forwardAddresses instead.              
*/

const client = new F1TelemetryClient.F1TelemetryClient();

// motion 0
client.on('motion',function(data) {
    console.log(data);
})

// session 1
client.on('session',function(data) {
    console.log(data);
})

// lap data 2
client.on('lapData',function(data) {
    console.log(data);
})

// event 3
client.on('event',function(data) {
    console.log(data);
})

// participants 4
client.on('participants',function(data) {
    console.log(data);
})

// car setup 5
client.on('carSetups',function(data) {
    console.log(data);
})

// car telemetry 6
client.on('carTelemetry',function(data) {
    console.log(data);
})

// car status 7
client.on('carStatus',function(data) {
    console.log(data);
})

// final classification 8
client.on('finalClassification',function(data) {
    console.log(data);
})

// lobby info 9
client.on('lobbyInfo',function(data) {
    console.log(data);
})

// car damage 10
client.on('carDamage',function(data) {
    console.log(data);
})

// session history 11
client.on('sessionHistory',function(data) {
    console.log(data);
})


// to start listening:
client.start();

// and when you want to stop:
//client.stop();

