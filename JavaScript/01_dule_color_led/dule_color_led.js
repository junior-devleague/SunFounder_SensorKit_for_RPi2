var wpi = require('wiring-pi');

var LedPinRed = 0;
var LedPinGreen = 1;

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

function ledInit(){
	wpi.softPwmCreate(LedPinRed, 0, 100);
	wpi.softPwmCreate(LedPinGreen, 0, 100);
}

function ledColorSet(r_val, g_val){
	wpi.softPwmWrite(LedPinRed, r_val);
	wpi.softPwmWrite(LedPinGreen, g_val);
}

function main(){
	var i;

	if (wpi.wiringPiSetup() === -1){
		console.log("setup wiringPi failed!");
		return;
	}

	ledInit();

	while(1){
		ledColorSet(0xff, 0x00);	//red
		delay(500);
		ledColorSet(0x00, 0xff); 	//green
		delay(500);
		ledColorSet(0xff, 0x45);
		delay(500);
		ledColorSet(0xff, 0xff);
		delay(500);
		ledColorSet(0x7c, 0xfc);
		delay(500);
	}
	return;
}
main();