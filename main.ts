/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan 
 * Created on: Oct 2024
 * This program uses the RobotBit's Neopixels
*/

// variables
let neopixelStrip: neopixel.Strip = null
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

// green
input.onButtonPressed(Button.A, function () {
basic.clearScreen()
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.pause(1000)

// yellow
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.pause(1000)

// red
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    basic.pause(1000)
    basic.showIcon(IconNames.Happy) 
})