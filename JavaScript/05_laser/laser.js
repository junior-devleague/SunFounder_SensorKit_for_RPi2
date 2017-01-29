var wpi = require('wiring-pi');

var LaserPin = 0;
console.log(wpi);

function delay(ms) {
    var cur_d = new Date();
    var cur_ticks = cur_d.getTime();
    var ms_passed = 0;
    while(ms_passed < ms) {
        var d = new Date();  // Possible memory leak?
        var ticks = d.getTime();
        ms_passed = ticks - cur_ticks;
        // d = null;  // Prevent memory leak?
    }
}

function main(){
	if (wpi.wiringPiSetup() === -1){
		console.log("setup wiringPi failed!");
		return;
	}
	wpi.pinMode(LaserPin, wpi.OUTPUT);
	console.log("pin mode");
	wpi.digitalWrite(LaserPin, wpi.HIGH);
	console.log("High");
	delay(5000);
	wpi.digitalWrite(LaserPin, wpi.LOW);
	console.log("Low");
	delay(5000);
	wpi.digitalWrite(LaserPin, wpi.HIGH);
	console.log("high");
}
main();