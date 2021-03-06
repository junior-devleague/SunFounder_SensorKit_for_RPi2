## Background
The Javascript version of the Sunfounder Sensor Kit for Raspberry Pi 2 makes great use of the GPIO access library written in C called WiringPi, for the BCM2835 used in the Raspberry Pi, and is binded to Node.js.

Resources: https://github.com/WiringPi/WiringPi-Node

## Before you begin
Ensure your Raspberry Pi 2 has these configurations:
- Node.js (Latest version)
- NPM
- WiringPi

Resource: https://github.com/junior-devleague/jr-devleague-raspberry-pi-projects/blob/master/config.md

## Install Dependencies
- Navigate to the directory you would like to work in until you see the JavaScript file
- Run `sudo npm i` and this will install all the packages needed for the program

## Usage
- Ensure you read the [safety](https://github.com/junior-devleague/jr-devleague-raspberry-pi-projects/blob/master/README.md) portion of the Raspberry Pi kit
- Run the program with `sudo node [filename].js`
