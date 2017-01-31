var wpi = require('wiring-pi');

var MPin = 0;
var Gpin = 1;
var Rpin = 2;

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
	wpi.pinMode(MPin, wpi.INPUT);
	LED("GREEN");

	while(1) {
		if (wpi.digitalRead(MPin) === 0) {
			delay(10);
			if (wpi.digitalRead(MPin)) {
				LED("RED");
				console.log("Mercury Tilt!\n");
			}
		} else if (wpi.digitalRead(MPin) === 1) {
			delay(10);
			if (wpi.digitalRead(MPin) === 1) {
				while(!wpi.digitalRead(MPin));
				LED("GREEN");
			}
		}
	}
	return;
}

main();