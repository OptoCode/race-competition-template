function moveForward (_in: number, calibrate: number) {
    sec = _in / calibrate
    basic.pause(1000)
    TPBot.setTravelTime(TPBot.DriveDirection.Forward, 25, sec)
    basic.pause(1000)
}
function turnLeft (sec: number) {
    basic.pause(1000)
    TPBot.setTravelTime(TPBot.DriveDirection.Left, 50, sec)
    basic.pause(1000)
}
input.onButtonPressed(Button.A, function () {
    moveForward(50, calibrateMoveForward)
    turnRight(CalibrateTurnRight)
    moveForward(40, calibrateMoveForward)
    turnLeft(CalibrateTurnLeft)
})
function followOther () {
    basic.pause(1000)
    distance = TPBot.sonarReturn(TPBot.SonarUnit.Centimeters)
    if (distance > 10 && distance < 20) {
        TPBot.setWheels(0, 0)
    } else if (distance < 10) {
        TPBot.setWheels(-30, -30)
    } else {
        TPBot.setWheels(30, 30)
    }
}
function turnRight (sec: number) {
    basic.pause(1000)
    TPBot.setTravelTime(TPBot.DriveDirection.Right, 50, sec)
    basic.pause(1000)
}
let distance = 0
let sec = 0
let calibrateMoveForward = 0
let CalibrateTurnRight = 0
let CalibrateTurnLeft = 0
// The default is 0.3
CalibrateTurnLeft = 0.3
// The default is 0.31
CalibrateTurnRight = 0.31
// The default is 19
calibrateMoveForward = 7.5
