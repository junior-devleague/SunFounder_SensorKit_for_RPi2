var wpi = require('wiring-pi');

var RelayPin = 0;

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
	var i;

	if (wpi.wiringPiSetup() === -1){
		console.log("setup wiringPi failed!");
		return;
	}

	pinMode(RelayPin, wpi.OUTPUT);

	while(1){
		wpi.digitalWrite(RelayPin, wpi.LOW);
		delay(500);
		wpi.digitalWrite(RelayPin, wpi.HIGH);
		delay(500);
	}
	return;
}
main();