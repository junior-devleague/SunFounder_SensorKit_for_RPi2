var wpi = require('wiring-pi');

var LaserPin = 0;

//Function which gives a delay in time before the next command
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
	
	//Set LedPin high (+3.3V) to turn off led
	//This will turn OFF laser;
	console.log("Laser off");
	wpi.digitalWrite(LaserPin, wpi.HIGH);
	delay(5000);
	
	//This will turn ON laser after waiting 5 seconds
	console.log("Laser on");
	wpi.digitalWrite(LaserPin, wpi.LOW);
	delay(5000);
	
	//This will turn OFF laser after waiting 5 seconds
	console.log("Laser off");
	wpi.digitalWrite(LaserPin, wpi.HIGH);
}

//Run main function
main();
