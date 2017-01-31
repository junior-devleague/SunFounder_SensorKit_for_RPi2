var wpi = require('wiring-pi');

var LedPinRed = 0;
var LedPinGreen = 1;
var LedPinBlue = 2;

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
	wpi.softPwmCreate(LedPinBlue, 0, 100);
}

function ledColorSet(r_val, g_val, b_val){
	wpi.softPwmCreate(LedPinRed, r_val);
	wpi.softPwmCreate(LedPinGreen, g_val);
	wpi.softPwmCreate(LedPinBlue, b_val);
}

function main(){
	var i;

	if (wpi.wiringPiSetup() === -1){
		console.log("setup wiringPi failed!");
		return;
	}

	ledInit();

	while(1){
		ledColorSet(0xff,0x00,0x00);   //red	
		delay(500);
		ledColorSet(0x00,0xff,0x00);   //green
		delay(500);
		ledColorSet(0x00,0x00,0xff);   //blue
		delay(500);

		ledColorSet(0xff,0xff,0x00);   //yellow
		delay(500);
		ledColorSet(0xff,0x00,0xff);   //pick
		delay(500);
		ledColorSet(0xc0,0xff,0x3e);
		delay(500);

		ledColorSet(0x94,0x00,0xd3);
		delay(500);
		ledColorSet(0x76,0xee,0x00);
		delay(500);
		ledColorSet(0x00,0xc5,0xcd);	
		delay(500);
	}
	return;
}
main();