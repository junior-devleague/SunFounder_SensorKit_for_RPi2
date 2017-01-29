var wpi = require('wiring-pi');

var BtnPin = 0;
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

function LED(color){
	wpi.pinMode(Gpin, wpi.OUTPUT);
	wpi.pinMode(Rpin, wpi.OUTPUT);
	if (color === "RED"){
		wpi.digitalWrite(Rpin, wpi.HIGH);
		wpi.digitalWrite(Gpin, wpi.LOW);
	} else if (color === "GREEN") {
		wpi.digitalWrite(Rpin, wpi.LOW);
		wpi.digitalWrite(Gpin, wpi.HIGH);
	} else {
		console.log("LED Error");
	}
}

function main(){
	if (wpi.wiringPiSetup() === -1){
		console.log("setup wiringPi failed!");
		return;
	}

	wpi.pinMode(BtnPin, wpi.INPUT);
	LED("GREEN");

	while(1){
		if (wpi.digitalRead(BtnPin) === 0){
			delay(10);
			if (wpi.digitalRead(BtnPin) === 0){
				LED("RED");
				console.log("Button is pressed\n");
			}
		} else if (wpi.digitalRead(BtnPin) === 1) {
			delay(10);
			if (wpi.digitalRead(BtnPin) === 1) {
				while (!wpi.digitalRead(BtnPin));
				LED("GREEN");
			}
		}
	}
	return 0;
}