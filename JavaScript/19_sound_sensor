var wpi = require('wiring-pi');

var PCF = 120;

function main ()
{
        var value;
        var count = 0;
        wpi.wiringPiSetup ();
        // Setup pcf8591 on base pin 120, and address 0x48
        wpi.pcf8591Setup (PCF, 0x48);
        while(1) // loop forever
        {
                value = wpi.analogRead(PCF);
                console.log(value);
                if (value < 100){
                        count++;
                        console.log("Voice In!!\n" + count);
                }
        }
        return;
}

main();
