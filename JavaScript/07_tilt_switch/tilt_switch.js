var wpi = require('wiring-pi');

var TiltPin = 0;
var Gpin = 1;
var Rpin = 2;

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

function LED(color) {
	wpi.pinMode(Gpin, wpi.OUTPUT);
	wpi.pinMode(Rpin, wpi.OUTPUT);
	if (color === "RED") {
		wpi.digitalWrite(Rpin, HIGH);
		wpi.digitalWrite(Gpin, LOW);
	} else if (color === "GREEN") {
		wpi.digitalWrite(Rpin, LOW);
		wpi.digitalWrite(Gpin, HIGH);
	} else {
		console.log("LED Error");
	}
}

function main() {
	if (wpi.wiringPiSetup() === -1) {
		console.log("setup wiringPi failed!");
		return;
	}
	wpi.pinMode(TiltPin, wpi.INPUT);
	LED("GREEN");

	while(1) {
		if (wpi.digitalRead(TiltPin) === 0) {
			delay(10);
			if (wpi.digitalRead(TiltPin)) {
				LED("RED");
				console.log("Tilt!\n");
			}
		} else if (wpi.digitalRead(TiltPin) === 1) {
			delay(10);
			if (wpi.digitalRead(TiltPin) === 1) {
				while(!wpi.digitalRead(TiltPin));
				LED("GREEN");
			}
		}
	}
	return;
}
main();